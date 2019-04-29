import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../shared/question.model';
import {QuestionService} from '../services/question.service';

@Component({
  selector: 'app-question-list-item',
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.css']
})
export class QuestionListItemComponent implements OnInit {

  @Input() question: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  delete() {
    this.questionService.deleteQuestion(this.question.id);
  }

}
