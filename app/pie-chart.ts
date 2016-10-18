import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';

// webpack html imports

@Component({
  selector: 'pie-chart',
  templateUrl: 'http://localhost:3000/app/pie-chart.html'
})
export class PieChartComponent {
  constructor(private http: Http) { 
    this.getHD();
     Observable.interval(5000)
          .subscribe((x) => {
                this.getHD();
          });
  }
  // Pie
  public pieChartLabels: string[] = ['Em Uso (GB)', 'Livre (GB)'];
  public pieChartData: number[] = [300,100];
  public pieChartType: string = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  getHD() {
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    this.http.get("http://localhost:4567/hd", new RequestOptions({ headers: headers }))
    .subscribe((response: Response) => {  
      let json = response.json();
      this.pieChartData = [json.espacoEmUso,json.espacoLivre] ;     
     });
  }

}