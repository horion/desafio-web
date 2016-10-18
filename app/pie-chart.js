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
var Rx_1 = require('rxjs/Rx');
var http_1 = require('@angular/http');
// webpack html imports
var PieChartComponent = (function () {
    function PieChartComponent(http) {
        var _this = this;
        this.http = http;
        // Pie
        this.pieChartLabels = ['Em Uso (GB)', 'Livre (GB)'];
        this.pieChartData = [300, 100];
        this.pieChartType = 'pie';
        this.getHD();
        Rx_1.Observable.interval(5000)
            .subscribe(function (x) {
            _this.getHD();
        });
    }
    // events
    PieChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PieChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    PieChartComponent.prototype.getHD = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.http.get("http://localhost:4567/hd", new http_1.RequestOptions({ headers: headers }))
            .subscribe(function (response) {
            var json = response.json();
            _this.pieChartData = [json.espacoEmUso, json.espacoLivre];
        });
    };
    PieChartComponent = __decorate([
        core_1.Component({
            selector: 'pie-chart',
            templateUrl: 'http://localhost:3000/app/pie-chart.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PieChartComponent);
    return PieChartComponent;
}());
exports.PieChartComponent = PieChartComponent;
//# sourceMappingURL=pie-chart.js.map