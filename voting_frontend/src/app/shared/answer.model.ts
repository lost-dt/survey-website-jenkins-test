export class Answer {
  public id: number;
  public answer: boolean;
  public answerString: string;
  public questionId: number;

  constructor(answer: boolean, questionId: number) {
    this.answer = answer;
    this.answerString = answer ? 'Yes' : 'No';
    this.questionId = questionId;
  }
}
