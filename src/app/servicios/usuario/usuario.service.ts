import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import {URL_SERVICIOS} from '../../configuracion/config'
import Swal from 'sweetalert2'

import 'rxjs/Rx' ;



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario:Usuario;
  token:string;
  constructor(
    
    private http: HttpClient
  ) { this.cargarStorage(); }
   
  guardarStorage(id:string,token:string,usuario:Usuario){
                    localStorage.setItem('id',id);
                    localStorage.setItem('token',token);
                    localStorage.setItem('usuario',JSON.stringify(usuario));
  this.usuario=usuario;
  this.token=token
  }


  estaLogueado(){
    
    return ( this.token.length>5  )? true:false;
    
  }

  cargarStorage(){
    console.log("asdasd")
    if (localStorage.getItem('token')){
      console.log("asdasd1")
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      console.log("asasd"+this.token)
    }
    else {
      this.token ='';
      this.usuario=null
    }
  }

  loginGoogle(token:string){
    let url = URL_SERVICIOS+'/login/google'; 
    return this.http.post(url,{token})
                  .map((resp:any)=>{
                    console.log(resp);
                    this.guardarStorage(resp.id,resp.token,resp.usuarioDB);
      return  true;
    });

  }

  login(usuario:Usuario,recordar:boolean=false){
    let url = URL_SERVICIOS+'/login'; 

    return this.http.post(url,usuario)
                  .map((resp:any)=>{
                    console.log(resp);
               
                    this.guardarStorage(resp.id,resp.token,resp.usuarioDB);
                    return true;

                  })

  }

  crearUsuario(usuario:Usuario){
    let url = URL_SERVICIOS+'/usuario';

    return this.http.post (url,usuario)
               .map((resp:any)=>{
                
                 Swal.fire('El usuario se registro correctamente')
                    return resp.usuario;
                  });
  }

}
