import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DoughnutChartComponent } from './doughnut.component';
import { PieChartComponent } from './pie-chart';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, ChartsModule,HttpModule ],
  declarations: [ AppComponent,DoughnutChartComponent,PieChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }