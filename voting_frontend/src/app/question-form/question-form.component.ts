import { Component, Input } from '@angular/core';

import { FormService } from '../services/form.service';
import { LocalStorageService } from '../services/local-storage.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  @Input() formHash: string;
  inputTypes = ['text', 'radio', 'select'];
  type = 'text';
  title: string;
  options = '';

  constructor(private questionService: QuestionService,
              private formService: FormService) {}

  onSubmit() {
    if (this.type === 'text') {
      this.options = '';
    }
    this.questionService.createQuestion(this.formHash, this.title, this.type, this.options)
                        .subscribe(() => this.formService.getAllForms());
    LocalStorageService.clearUser();
  }
}
