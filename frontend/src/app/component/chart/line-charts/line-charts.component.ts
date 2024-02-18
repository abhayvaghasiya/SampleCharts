import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrl: './line-charts.component.css'
})
export class LineChartsComponent {
  @Input() data : any[] = [];
  view: [number, number] = [700, 400];
  legend: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Change';
  yAxisLabel: string = 'Frequency';
  timeline: boolean = true;
}
