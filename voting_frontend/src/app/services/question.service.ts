import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';

import { Question } from '../shared/question.model';
import { QuestionBase } from '../question-base';
import {RadioButtonQuestion} from '../question-radio';

@Injectable({ providedIn: 'root' })
export class QuestionService {

  public questions = new BehaviorSubject<Question[]>([]);
  public questionControls = new BehaviorSubject<QuestionBase<any>[]>([]);

  private httpPostHeader =  new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  getQuestions(): void {
    this.http.get<Question[]>('api/question/all').pipe(catchError(this.handleError)).subscribe(questions => {
      this.questions.next(questions);
    });
  }
  
  getQuestionControls(): void {
    this.getQuestions();
    this.questions.subscribe(questionObjects => {
      const newQuestionControls = [];
      let order = 1;
      questionObjects.forEach(q => {
        newQuestionControls.push(new RadioButtonQuestion({
          key: `question${q.id}`,
          label: q.title,
          required: true,
          order: order++
        }));
      });
      this.questionControls.next(newQuestionControls);
    });
  }

  createQuestion(title: string): void {
    this.http.post('api/question', title, { headers: this.httpPostHeader, responseType: 'text' }).subscribe(res => console.log(res));
  }

  deleteQuestion(id: number): void {
    this.http.delete(`api/question/${id}`).subscribe();
  }

  submitAnswers(answers: object) {
    Object.keys(answers).forEach(questionId => {
      this.http.post('api/vote',
                     JSON.stringify({ answer: answers[questionId],
                                      answerString: Boolean(answers[questionId]) ? 'Yes' : 'No',
                                      questionId: questionId.slice('question'.length),
                                      userId: 0 }),
                     { headers: this.httpPostHeader, responseType: 'text' }).subscribe(res => console.log(res));
    });

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
