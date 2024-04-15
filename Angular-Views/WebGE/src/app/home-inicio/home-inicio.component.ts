import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home-inicio',
  templateUrl: './home-inicio.component.html',
  styleUrl: './home-inicio.component.css'
})
export class HomeInicioComponent   {
  constructor() { }

  ngOnInit(): void {
    this.renderChartWeek();
    this.renderChartLastWeek();
    this.renderChartLastMonth();
  }

  renderChartWeek() {
    const options: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Semana Actual'
      },
      series: [{
        type: 'pie',
        name: 'Porcentaje',
        data: [{
          name: 'Categoría A',
          y: 30
        }, {
          name: 'Categoría B',
          y: 20
        }, {
          name: 'Categoría C',
          y: 50
        }]
      }]
    };

    Highcharts.chart('chartWeek', options);
  }

  renderChartLastWeek() {
    const options: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Última Semana'
      },
      series: [{
        type: 'pie',
        name: 'Porcentaje',
        data: [{
          name: 'Categoría A',
          y: 25
        }, {
          name: 'Categoría B',
          y: 35
        }, {
          name: 'Categoría C',
          y: 40
        }]
      }]
    };

    Highcharts.chart('chartLastWeek', options);
  }

  renderChartLastMonth() {
    const options: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Último Mes'
      },
      series: [{
        type: 'pie',
        name: 'Porcentaje',
        data: [{
          name: 'Categoría A',
          y: 40,
          color: 
          'red',
        }, {
          name: 'Categoría B',
          y: 30
        }, {
          name: 'Categoría C',
          y: 30
        }]
      }]
    };

    Highcharts.chart('chartLastMonth', options);
  }
  }
