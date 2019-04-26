import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question.model';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  questions: Question[];

  constructor(private questionService: QuestionService) {
    this.questions = [];
  }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      console.log(questions);
    });
  }
}
