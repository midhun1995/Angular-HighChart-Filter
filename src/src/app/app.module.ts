import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

declare var require:any;

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  ChartModule],
  declarations: [ AppComponent, ChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);