import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { QuestionBase } from '../shared/question-base';
import { QuestionService } from '../services/question.service';
import { QuestionControlService } from '../services/question-control.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [QuestionControlService]
})
export class SurveyComponent implements OnInit {
  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private qs: QuestionService, private router: Router) {  }

  ngOnInit() {
    this.qs.getQuestionControls();
    this.qs.questionControls.subscribe(questionControls => {
      if (questionControls.length) {
        this.questions = questionControls;
        this.form = this.qcs.toFormGroup(questionControls);
      }
    });
  }
  
  onSubmit() {
    this.qs.submitAnswers(this.form.value);
    this.payLoad = JSON.stringify(this.form.value); // For debugging purposes
    this.router.navigate(['stats']);
  }
}
