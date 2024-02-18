import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SampleChart';
  currentSelection :number = 1;

  updateSelection(c:number){
    this.currentSelection = c;
  }
}
