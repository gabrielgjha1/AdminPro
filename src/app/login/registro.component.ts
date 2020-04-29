import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/servicios.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


declare  function init_plugins();

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./login.component.css']
})
export class RegistroComponent implements OnInit {

  //variable de nuestro formulario
  forma:FormGroup;
  constructor(public _UsuarioService:UsuarioService,
              public router:Router) { }

  //validacion de nuestro formulario retorna true si hay error
  soniguales(campo1:string,campo2:string){

    return(group:FormGroup)=>{

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2 ].value;

      if (pass1==pass2){
          return null;
      }

      //si la validacion no se cumple se retorna un error por eso soniguales:true, es el error
      return {
        soniguales:true
      }

    };

  }

  ngOnInit(): void {
   init_plugins();

   //formulario
   this.forma = new FormGroup({

    nombre: new FormControl(null,Validators.required),
    correo: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,Validators.required),
    password2: new FormControl(null,Validators.required),
    condiciones: new FormControl(null)

    
   },{validators:this.soniguales('password','password2')});

  }

  //Registrar usuario de nuestro programa
  Registrarusuario(){

    // si el formulario es invalido, osea si una validacion no se cumple
    if ( this.forma.invalid){
      console.log(this.forma.invalid);
      return;
    }

    // evalua si el check se presiono
    if ( !this.forma.value.condiciones){
      Swal.fire('Debe aceptar las condiciones')
      console.log(this.forma.value.condiciones)

      return;
    }
    
    // se llena la informacion de nuestro usuario para luego enviarlo a nuestro sericio
    let usuario = new Usuario(

      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password

    );

    //SIrve para crear un usuario, se llama al servicio se envia nuestro usuario lleno y si todo salee bien se realiza el suscribe
    this._UsuarioService.crearUsuario(usuario)
          .subscribe(resp=>{

            console.log(resp);
            
            this.router.navigate(['/login']);
          });
   
  }

}
