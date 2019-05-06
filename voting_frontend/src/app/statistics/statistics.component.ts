import { Component, OnInit } from '@angular/core';

import { StatisticsService } from '../services/statistics.service';
import { StatData } from '../shared/stat-data.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public answerStats: StatData[] = [];

  constructor(private statService: StatisticsService) { }

  ngOnInit() {
    this.statService.getStats();
    this.statService.statData.subscribe(stats => {
      if (stats.length) {
        this.answerStats = stats;
      }
    });
  }
}
