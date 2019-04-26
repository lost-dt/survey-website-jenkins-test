import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions = [
      {
        id: 1,
        text: 'Do you like cookies?'
      },
      {
        id: 2,
        text: 'Did George Bush commit 9/11?'
      }
    ];
    return { questions };
  }
}
