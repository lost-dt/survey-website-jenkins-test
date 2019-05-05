import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import { StatisticsService } from '../services/statistics.service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public answerData;
  /*public options: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Do you love cats or dogs?'
    },
    xAxis: {
      categories:
    }
  };*/

  constructor(private statService: StatisticsService) { }

  ngOnInit() {
    this.statService.getStatsForQuestion(2).subscribe(data => {
      console.log(data);
      /*let options = {
        // TODO: FILL SPARE OPTIONS
      };*/

      /*let options = {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Do you love cats or dogs?'
        },
        xAxis: {
          categories: ['']
        },
        yAxis: {
          allowDecimals: false,
          title: {
            text: 'User answers'
          }
        },
        series: []
      };*/

      let options = {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Do you love cats or dogs?'
        },
        xAxis: {
          categories: ['']
        },
        yAxis: {
          allowDecimals: false,
          title: {
            text: 'User answers'
          }
        },
        series: []
      };

      /*switch (data.type) {
        case 'radio':
          // TODO: FILL OPTIONS FOR BAR CHART
          break;
        case 'select':
          // TODO: FILL OPTIONS FOR PIE CHART
          break;
      }*/

      Object.keys(data).forEach(key => {
        console.log(key, data[key]);
        //options.series.push({ name: key, data: [data[key]] });
        options.series.push({ name: key, y: data[key]});
      });
      console.log(options.series);
      Highcharts.chart('container', options);
    });
  }

}
