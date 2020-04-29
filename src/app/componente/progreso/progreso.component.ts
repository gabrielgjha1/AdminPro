import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef  } from '@angular/core';


@Component({
  selector: 'app-progresos',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponents implements OnInit {
  @Input() public progreso:Number;
  @Input() public leyenda:string;
  @Output() public cambiovalor:EventEmitter<Number> = new EventEmitter();
  @ViewChild('elemento') elemento:ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }
  CambiarValor(valor){
    this.progreso=this.progreso+valor;
    if(this.progreso>=100){
      this.progreso=100;
      
    }
    else if (this.progreso<=0){
      this.progreso=0;
   
    }
    this.elemento.nativeElement.value = this.progreso;
    this.cambiovalor.emit(this.progreso);

  }

  Cambio(numero:Number){
    if (numero>=100){
      numero=100;
    }
    if (numero<=0){
      numero=0;
    }
    this.cambiovalor.emit(numero);
  }


}
