import { Component, OnInit } from '@angular/core';

import { Form } from '../shared/form.model';
import { FormService } from '../services/form.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  public forms: Form[] = [];
  public columnsToDisplay = ['id', 'title', 'type', 'options', 'delete'];

  constructor(private formService: FormService,
              private questionService: QuestionService) {}

  ngOnInit() {
    this.formService.getAllForms();
    this.formService.forms.subscribe(forms => {
      this.forms = forms;
    });
  }

  delete(questionId: number) {
    this.questionService.deleteQuestion(questionId).subscribe(() => this.formService.getAllForms());
  }
}
