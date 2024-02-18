import {Component, Input} from '@angular/core';
import {LegendPosition} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrl: './pie-charts.component.css'
})
export class PieChartsComponent {
  @Input() data : any[] = [];
  view: [number, number] = [700, 400];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;
  constructor() {}
}
