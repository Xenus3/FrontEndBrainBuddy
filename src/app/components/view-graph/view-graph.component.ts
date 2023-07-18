import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  styleUrls: ['./view-graph.component.scss']
})
export class ViewGraphComponent {
  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Reaction Time Statistics'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['0pts','1pts','2pts', '3pts', '4pts', '5pts', '6pts', '7pts','8pts','9pts','10pts','11pts','12pts', '13pts', '14pts', '15pts', '16pts', '17pts','18pts','19pts','20pts'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: 'Nouveau score',
      data: [0 , 100]
  }, {
      name: 'le meilleur score',
      data: [15 , 10, 26, 6 ,60]
  } ]
  }
  constructor() { }
  ngOnInit() {
    Highcharts.chart('container', this.options);
  }
}

