import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  @Input() currentSelection : number = 1;
  data: any[] = [];
  multiData: any[] =[];
  private changeSequence=0
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData(true).subscribe((res) => {
      this.data = res;
      this.updateMultiData(res);
    })
  }

  private updateMultiData(current:any[]){
    if(this.multiData.length==0){
      current.forEach(e=>{
        this.multiData.push({name:e.name, series:[{name:""+this.changeSequence,value:e.value}]});
      })
    }else{
      this.multiData.forEach(e=>{
        e.series.push({name:""+this.changeSequence, value:current.find(x=> x.name===e.name).value});
        if(e.series.length>3){
          e.series.splice(0,  e.series.length - 3);
        }
      })
    }
    this.changeSequence++;
  }
}
