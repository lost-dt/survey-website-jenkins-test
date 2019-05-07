import { Question } from './question.model';

export class Form {
  constructor(public id: string, public title: string, public questions: Question[]) {}
}
