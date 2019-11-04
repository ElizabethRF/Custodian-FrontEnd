import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Reporte anual de incidencias"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Enero" },
          { y: 120, name: "Febrero" },
          { y: 300, name: "Marzo" },
          { y: 800, name: "Abril" },
          { y: 150, name: "Mayo" },
          { y: 150, name: "Junio"},
          { y: 250, name: "Julio" },
          { y: 450, name: "Agosto" },
          { y: 120, name: "Septiembre" },
          { y: 300, name: "Octubre" },
          { y: 800, name: "Noviembre" },
          { y: 150, name: "Diciembre" }
        ]
      }]
    });
      
    chart.render();


  }

}


 
