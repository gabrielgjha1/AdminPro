import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-componente-grafica',
  templateUrl: './componente-grafica.component.html',
  styleUrls: ['./componente-grafica.component.css']
})
export class ComponenteGraficaComponent implements OnInit {


   @Input('label') public doughnutChartLabels: Label[] = [];
   @Input('datos') public doughnutChartData: MultiDataSet = [];
   @Input('tipo') public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
