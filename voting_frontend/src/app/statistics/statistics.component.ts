import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StatisticsService } from '../services/statistics.service';
import { StatData } from '../shared/stat-data.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public answerStats: StatData[] = [];

  constructor(private statService: StatisticsService, private router: Router) { }

  navigateToMain() {
    this.router.navigate(['']);
  }
  
  ngOnInit() {
    this.statService.getStats();
    this.statService.statData.subscribe(stats => {
      if (stats.length) {
        this.answerStats = stats;
      }
    });
  }
}
