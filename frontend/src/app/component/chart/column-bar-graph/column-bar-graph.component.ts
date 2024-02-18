import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-column-bar-graph',
  templateUrl: './column-bar-graph.component.html',
  styleUrl: './column-bar-graph.component.css'
})
export class ColumnBarGraphComponent {
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
