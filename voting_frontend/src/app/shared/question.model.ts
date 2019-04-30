export class Question {
  public id: number;
  public title: string;
  public type: string;
  public options: string;
  constructor(title: string, type: string, options: string) {
    this.title = title;
    this.type = type;
    this.options = options;
  }
}
