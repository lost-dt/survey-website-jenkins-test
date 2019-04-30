import { Component} from '@angular/core';

import { QuestionService } from '../services/question.service';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

export class NewQuestionErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return form && form.touched;
  }
}

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  newTitle: string;

  matcher = new NewQuestionErrorStateMatcher(); // For custom form error handling

  constructor(private questionService: QuestionService) { }

  onSubmit() {
    this.questionService.createQuestion(this.newTitle);
  }
}
