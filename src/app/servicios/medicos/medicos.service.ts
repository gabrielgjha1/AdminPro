import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/configuracion/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Medicos } from 'src/app/models/medicos.models';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  token:string;

  constructor(public http:HttpClient,public _UsuarioService:UsuarioService) {

    this.token = this._UsuarioService.token;

   }


  TraerDatos(desde:Number){
    let url = URL_SERVICIOS+'/medicos?desde='+desde;
   

    return this.http.get(url);    

  }

  TraerDatosID(id:string){

    let url = URL_SERVICIOS+'/medicos/'+id;

    return this.http.get(url)

  }

  CrearMedico(medico:Medicos){
    let url = URL_SERVICIOS+'/medicos/?token='+this.token;

    return this.http.post(url,medico)

  }


  BorrarMedicos(id:String){
    let url = URL_SERVICIOS+'/medicos/'+id;

    return this.http.delete(url).map((resp:any)=>{

      console.log(resp)

    });
   
  }

  ActualizarMedicos(id:String,medicos:Medicos){
    let url = URL_SERVICIOS+'/medicos/'+id;

    return this.http.put(url,medicos).map(resp=>{
      Swal.fire(
        'Buen trabajo!',
        'Medico Registrado!',
        'success'
      )
    });




  }




}
