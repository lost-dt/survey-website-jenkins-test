export class Question {
  static globalId = 3;
  public id: number;
  public title: string;
  constructor(title: string) {
    this.id = Question.globalId++;
    this.title = title;
  }
}
