import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import {URL_SERVICIOS} from '../../configuracion/config'
import Swal from 'sweetalert2'

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
import { SubirService } from '../subir-archivo/subir.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  logout() {
    throw new Error("Method not implemented.");
  }
  usuario:Usuario;
  token:string;
  menu:any[] = []
  constructor(
    private router:Router,
    public _SubirService: SubirService,
    private http: HttpClient
  ) { this.cargarStorage();}
   
  // Guardar los datos del usuario en el store
  guardarStorage(id:string,token:string,usuario:Usuario,menu:any){
 
                   //guardando los datos
                    localStorage.setItem('id',id);
                    localStorage.setItem('token',token);
                    localStorage.setItem('usuario',JSON.stringify(usuario));
                    localStorage.setItem('menu',JSON.stringify(menu));

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
      this.menu = JSON.parse(localStorage.getItem('menu'));
      console.log(this.menu)
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
                    this.guardarStorage(resp.id,resp.token,resp.usuarioDB,resp.menu);
      return  true;
    });

  }

  login(usuario:Usuario,recordar:boolean=false){
    let url = URL_SERVICIOS+'/login'; 

    return this.http.post(url,usuario)
                  .map((resp:any)=>{
                    console.log(resp);
               
                    this.guardarStorage(resp.id,resp.token,resp.usuarioDB,resp.menu);
                    return true;

                  })
                  .catch(err=>{
                    console.log(err);

                    Swal.fire({
                      icon: 'error',
                      title: 'error en el login',
                      text: err.error.message,
                      footer: 'Why do I have this issue?'
                    })

                      return Observable.throw(err);
                  });

  }

  crearUsuario(usuario:Usuario){
    let url = URL_SERVICIOS+'/usuario';

    return this.http.post (url,usuario)

               .map((resp:any)=>{
                
                 Swal.fire('El usuario se registro correctamente')
                    return resp.usuario;
                  })
                  .catch(err=>{
                    console.log(err);

                    Swal.fire({
                      icon: 'error',
                      title: 'Error en el registro',
                      text: err.error.message,
                      footer: 'Why do I have this issue?'
                    })

                      return Observable.throw(err);
                  });

  }

  actualizarUsuario (usuario:Usuario){
    let url = URL_SERVICIOS+'/usuario/'+this.usuario._id;
    url+='?token='+this.token;
    return this.http.put(url,usuario)
            .map((resp:any)=>{
              console.log(resp);
              this.guardarStorage(resp.usuario._id,this.token,resp.usuario,resp.menu);
              
              Swal.fire('Usuario actualizado',resp.usuario.nombre,'success');
            


            });


  }
  
  cambiarImagen (archivo:File,id:string){

    this._SubirService.subirArchivo(archivo,'usuarios',id)
      
        .then((resp:any)=>{
          console.log(resp);
          this.usuario.img=resp.usuario.img;
          Swal.fire('Usuario actualizado',resp.usuario.nombre,'success');
          this.guardarStorage(id,this.token,this.usuario,resp.menu)
        })
        /*
        .cath(resp=>{
          console.log(resp);
        });
        */

  }

  TraerUsuarios(desde:number=0){
    let url = URL_SERVICIOS+'/usuario'+'?desde='+desde;

    return this.http.get(url);
  

  }

  BuscarUsuarios(nombre:string){
    let url = URL_SERVICIOS+'/busqueda/coleccion/usuarios/'+nombre;
    return this.http.get(url);
  }


  EliminarUsuario(id:string){
    let url = URL_SERVICIOS+'/usuario/'+id;

    return this.http.delete(url);

  }

}
