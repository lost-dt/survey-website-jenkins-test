import { StatData } from './stat-data.model';

export class StatObject {
  constructor(public title: string, public data: StatData[]) {}
}
