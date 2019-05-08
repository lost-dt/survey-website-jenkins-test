import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StatisticsService } from '../services/statistics.service';
import { StatData } from '../shared/stat-data.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public answerStats: StatData[] = [];
  public formTitle = '';
  public disableMainPageLink: boolean;

  constructor(private statService: StatisticsService,
              private router: Router,
              private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.statService.getStatsByFormId(params.get('formHash'));
      this.statService.statObject.subscribe(statObj => {
        if (statObj.stats.length) {
          this.formTitle = statObj.name;
          this.answerStats = statObj.stats;
        }
      });
    });
    this.disableMainPageLink = this.route.snapshot.queryParamMap.get('disable') === 'true';
  }
}
