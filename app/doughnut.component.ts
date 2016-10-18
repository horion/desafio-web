import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// webpack html imports

@Component({
  selector: 'doughnut-chart',
  templateUrl: 'http://localhost:3000/app/doughnut-chart.html'
})
export class DoughnutChartComponent {
  constructor(private http: Http) { 
    this.getMemoria();
    Observable.interval(5000)
          .subscribe((x) => {
                this.getMemoria();
            });

  }
  // Doughnut
  public doughnutChartLabels:string[] = ['Em Uso (GB)', 'Livre (GB)'];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  getMemoria() {
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    this.http.get("http://localhost:4567/memoria", new RequestOptions({ headers: headers }))
    .subscribe((response: Response) => {  
      let json = response.json();
      this.doughnutChartData = [json.memoriaEmUso,json.memoriaLivre] ;     
     });
  }
}