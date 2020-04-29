import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigServices {

  ajustes : Ajustes ={
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }
  constructor() { }

  guardarAjustes(){
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes))
  }

  cargarAjustes(){
    if ( localStorage.getItem('ajustes')) this.ajustes = JSON.parse(localStorage.getItem('ajustes'))
  }
 

}
 interface Ajustes {
    temaUrl:string;
    tema:string;
  }