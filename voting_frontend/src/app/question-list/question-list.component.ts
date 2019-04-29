import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Unsubscribable } from 'rxjs';

import { Question } from '../shared/question.model';
import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit, OnDestroy {
  questions: Question[];
  private intervalSubscription: Unsubscribable;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestions();
    this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getQuestions());
    this.questionService.questions.subscribe(questions => this.questions = questions);
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
