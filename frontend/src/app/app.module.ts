import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ChartComponent } from './component/chart/chart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PieChartsComponent } from './component/chart/pie-charts/pie-charts.component';
import { BarGraphComponent } from './component/chart/bar-graph/bar-graph.component';
import { LineChartsComponent } from './component/chart/line-charts/line-charts.component';
import { ColumnBarGraphComponent } from './component/chart/column-bar-graph/column-bar-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PieChartsComponent,
    BarGraphComponent,
    LineChartsComponent,
    ColumnBarGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
