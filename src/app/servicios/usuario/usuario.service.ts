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
   
  // Guardar los datos del usuario en el store
  guardarStorage(id:string,token:string,usuario:Usuario){
 
                   //guardando los datos
                    localStorage.setItem('id',id);
                    localStorage.setItem('token',token);
                    localStorage.setItem('usuario',JSON.stringify(usuario));

  //se guardan los datos del usuario en la variable usuario para utilizarlo en otras pantallas de nuestro codigo
  this.usuario=usuario;
  this.token=token;

  }


  estaLogueado(){
    
    return ( this.token.length>5  )? true:false;
    
  }

  // cada vez que una pagina carga actulizamos los datos de nuestro local estore
  cargarStorage(){
    
    if (localStorage.getItem('token')){

      //guardamos los datos del token  de nuestro local store en nuestras 2 variables 
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));

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

  actualizarUsuario (usuario:Usuario){
    let url = URL_SERVICIOS+'/usuario/'+this.usuario._id;
    url+='?token='+this.token;
    return this.http.put(url,usuario)
            .map((resp:any)=>{
              console.log(resp);
              this.guardarStorage(resp.usuario._id,this.token,resp.usuario);
              
              Swal.fire('Usuario actualizado',resp.usuario.nombre,'success');
            


            });


  }

}
