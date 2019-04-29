import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../services/question.service';
import {QuestionBase} from '../question-base';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  public questionControls: QuestionBase<any>[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questionControls = this.questionService.getQuestionControls();
  }
}
