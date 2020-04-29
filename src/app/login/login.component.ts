import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../servicios/servicios.index';
declare  function init_plugins();
declare const gapi:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame:boolean =false;
   auth2:any;
   //se exporta las rutas y los servicios
  constructor( public router : Router, 
              public _UsuarioService:UsuarioService  ) { }

  ngOnInit() {
    init_plugins();
    //autenticacion de google
    this.googleInit();
  }
  //autenticacion de google
  googleInit(){
    gapi.load('auth2', ()=>{
      this.auth2=gapi.auth2.init({
        cliente_id:'921545765229-hkifvdv7s3u1e26oem0ibl4h1qq9ccjh.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope: 'profile'
      })
      //btnGOogle el id de nuesro broton
      this.attachSignin(document.getElementById('btnGoogle'))
    });

  }

  // autenticacion de google
  attachSignin(element){
    this.auth2.attachClickHandler(element,{},googleUser=>{
        
     // let profile = googleUser.getBasicProfile();
       // console.log(profile);

       let token = googleUser.getAuthResponse().id_token;
      this._UsuarioService.loginGoogle(token)
                  .subscribe(resp=>{
                    console.log(resp);
                    this.router.navigate(['/dashboard']);
                  });
    });
  }

  // login de nuestro programa
  ingresar(f:NgForm){
    // si el formulario es invalido
    if (f.invalid){
      return;
    }

    // en este caso se pone null ya que solo enviamos el email y el password, no enviamos el noombre
    let usuario = new Usuario( null,f.value.email,f.value.password);

    this._UsuarioService.login(usuario,f.value.recuerdame)
                        .subscribe(resp=>{
                          this.router.navigate(['/dashboard']);
                      
                       

    });

  }
}
