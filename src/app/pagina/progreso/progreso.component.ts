import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponent implements OnInit {
  public progreso:Number;
  public progreso2:Number;
  constructor() {
    this.progreso= 15;
    this.progreso2= 50;
   }

  ngOnInit(): void {
  }

 

}
