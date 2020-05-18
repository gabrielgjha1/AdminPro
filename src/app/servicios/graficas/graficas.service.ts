import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { graficas } from 'src/app/models/graficas.models';
import { URL_SERVICIOS } from 'src/app/configuracion/config';


@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( public http: HttpClient  ) { }


  TraerGraficas(){

    let url = URL_SERVICIOS+'/graficas';

    return this.http.get(url);

  }

  GuardarGraficas(Graficas:graficas){
    let url = URL_SERVICIOS+'/graficas';
    return this.http.post(url,Graficas)
  }

  EliminarGrafica( id:String ){
    let url = URL_SERVICIOS+'/graficas/'+id;

    return this.http.delete(url);


  }


}
