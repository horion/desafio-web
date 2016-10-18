"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
// webpack html imports
var DoughnutChartComponent = (function () {
    function DoughnutChartComponent(http) {
        var _this = this;
        this.http = http;
        // Doughnut
        this.doughnutChartLabels = ['Em Uso (GB)', 'Livre (GB)'];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.getMemoria();
        Rx_1.Observable.interval(5000)
            .subscribe(function (x) {
            _this.getMemoria();
        });
    }
    // events
    DoughnutChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DoughnutChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DoughnutChartComponent.prototype.getMemoria = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.http.get("http://localhost:4567/memoria", new http_1.RequestOptions({ headers: headers }))
            .subscribe(function (response) {
            var json = response.json();
            _this.doughnutChartData = [json.memoriaEmUso, json.memoriaLivre];
        });
    };
    DoughnutChartComponent = __decorate([
        core_1.Component({
            selector: 'doughnut-chart',
            templateUrl: 'http://localhost:3000/app/doughnut-chart.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DoughnutChartComponent);
    return DoughnutChartComponent;
}());
exports.DoughnutChartComponent = DoughnutChartComponent;
//# sourceMappingURL=doughnut.component.js.map