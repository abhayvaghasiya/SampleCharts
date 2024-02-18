import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrl: './bar-graph.component.css'
})
export class BarGraphComponent {
  @Input() data : any[] = [];
  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Alphabets';
  showYAxisLabel = true;
  yAxisLabel = 'Frequency';

}
