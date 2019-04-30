import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../services/question-control.service';
import {QuestionService} from '../services/question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private qs: QuestionService) {  }

  ngOnInit() {
    this.qs.getQuestionControls();
    this.qs.questionControls.subscribe(questionCntrls => {
      if (questionCntrls.length) {
        this.questions = questionCntrls;
        this.form = this.qcs.toFormGroup(questionCntrls);
      }
    });

  }

  onSubmit() {
    this.qs.submitAnswers(this.form.value);
    this.payLoad = JSON.stringify(this.form.value);
  }
}
