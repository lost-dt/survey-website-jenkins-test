import {Component, OnDestroy, OnInit} from '@angular/core';
import { Question } from '../question/question.model';
import { QuestionService } from '../services/question.service';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit, OnDestroy {
  public questions: Question[];
  private questionSubscription: Unsubscribable;

  constructor(private questionService: QuestionService) {
    this.questions = [];
  }

  ngOnInit() {
    this.questionService.getQuestions();
    this.questionSubscription = this.questionService.questions.subscribe(questions => {
      this.questions = questions;
    });
  }

  onSubmit() {

  }

  ngOnDestroy(): void {
    if (this.questionSubscription) {
      this.questionSubscription.unsubscribe();
    }
  }
}
