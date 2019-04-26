import { Component} from '@angular/core';

import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  newTitle: string;

  constructor(private questionService: QuestionService) { }

  onSubmit() {
    this.questionService.createQuestion(this.newTitle);
  }

}
