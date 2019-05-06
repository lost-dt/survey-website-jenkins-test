import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { QuestionBase } from '../shared/question-base';
import { QuestionService } from '../services/question.service';
import { QuestionControlService } from '../services/question-control.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [QuestionControlService]
})
export class SurveyComponent implements OnInit {
  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  isSubmitted = false;

  constructor(private qcs: QuestionControlService,
              private qs: QuestionService,
              private userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.qs.getQuestionControls();
    this.qs.questionControls.subscribe(questionControls => {
      if (questionControls.length) {
        this.questions = questionControls;
        this.form = this.qcs.toFormGroup(questionControls);
      }
    });
  }

  navigateToStats(params) {
    this.router.navigate(['stats'], params);
  }

  onSubmit() {
    this.isSubmitted = true;
    this.userService.initUser();
    this.qs.submitAnswers(this.form.value);
    this.snackBar.open('Thanks for participation!', 'Got it!', { duration: 7000 });
    this.navigateToStats({ queryParams: { disable: true } });
  }
}
