import { QuestionBase } from './question-base';

export class CheckBoxQuestion extends QuestionBase<string> {
  controlType = 'checkbox';

  constructor(options: {} = {}) {
    super(options);
  }
}
