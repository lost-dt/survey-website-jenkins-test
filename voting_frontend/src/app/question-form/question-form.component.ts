import { Component } from '@angular/core';

import { QuestionService } from '../services/question.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  inputTypes = ['text', 'radio', 'select'];
  type = 'text';
  title: string;
  options = '';

  constructor(private questionService: QuestionService) {}

  onSubmit() {
    if (this.type === 'text') {
      this.options = '';
    }
    this.questionService.createQuestion(this.title, this.type, this.options).subscribe(() => this.questionService.getQuestions());
    LocalStorageService.clearUser();
  }
}
