import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent  {
  
  from:Date;
  to:Date;
  constructor() { 
  }

  onClick() {
        var jsonData = {
  "Hexaware": [
      { "x": "2018-1-1 14:00:15", "y": 12 },
      { "x": "2018-1-1 14:00:15", "y": 14 },
      { "x": "2018-3-1 14:00:15", "y": 12 },
      { "x": "2018-4-1 14:00:15", "y": 10 },
      { "x": "2018-5-1 14:00:15", "y": 16 },
      { "x": "2018-6-1 12:58:52", "y": 14 },
      { "x": "2018-7-1 13:33:23", "y": 10 },
      { "x": "2018-8-1 13:49:18", "y": 11 },
      { "x": "2018-9-1 13:55:01", "y": 14 },
      { "x": "2018-10-1 14:00:15", "y": 12 },
      { "x": "2018-11-1 13:49:18", "y": 16 },
      { "x": "2018-12-1 13:55:01", "y": 20 },
  ],
  }
  var dataPoints = [];
    this.chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart for Growth of Company X'
    },
    axisY: {
      text:'Growth %'
    },
    credits: {
      enabled: false
    },
    series: [
      {
         allowPointSelect: true,
        data: dataPoints
      }
    ]
  });
  var start=this.from;
  var d1 = new Date(start);
  console.log(d1);
  var end=this.to;
  var d2= new Date(end);
  console.log(d2);
  var display=jsonData.Hexaware;
  //console.log(display);
  for(var i in display)
  {
     var xVal = display[i].x;
     var d = new Date(xVal);
     //console.log(d.getTime());
     if(d.getTime()>d1.getTime() && d.getTime()<=d2.getTime())
        this.chart.addPoint({x: new Date(xVal), y: display[i].y});
  }


  }

}