import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URL_SERVICIOS} from '../../configuracion/config'
import { hospitalModel } from 'src/app/models/hospital.model';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  token:string;
  constructor(private http : HttpClient,public _UsuarioService : UsuarioService) { 

   this.token = _UsuarioService.token;



  }

  
  TraerHospitales(desde?:number){
    
    let url = URL_SERVICIOS+'/hospitales'+'?desde='+desde;
      return this.http.get(url);
  }

  BorrarHospitales(id:string){

    
    let url = URL_SERVICIOS+'/hospitales/'+id;
    console.log(url);

    return this.http.delete(url);

  }


  GuardarHospital(hospital:hospitalModel){
    
    let url = URL_SERVICIOS+'/hospitales'+'?token='+this.token;
    console.log(hospital)
    return this.http.post(url,hospital)


  }


  BuscarHospital(nombre:string){

    let url = URL_SERVICIOS+'/busqueda/coleccion/hospitales/'+nombre;
    console.log(url);
    return this.http.get(url)



  }

  ActualizarHospital(id:string,nombre:hospitalModel){
    let url = URL_SERVICIOS+'/hospitales/'+id;
     let nombreviejo=  nombre.nombre;
    return this.http.put(url,nombre).map((resp:any)=>{
      console.log('sdsd');
      console.log(resp.datosactualizados.nombre);
    
      Swal.fire(
        'Usuario Actualizado',
        'Se cambio el nombre del hospital de: <strong> '+nombreviejo+'</strong> a:  <strong>'+resp.datosactualizados.nombre+'</strong> ',
        'success'
      )


    });


  }


  


}
