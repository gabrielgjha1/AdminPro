import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/servicios.index';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario:Usuario;
  nombre:string="asas";
  imagenSubir:File;
  constructor(public _UsuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this._UsuarioService.usuario;
  }

  guardar (f:any){
    
    this.usuario.nombre = f.nombre;
    this.usuario.email = f.email;
    console.log(this.usuario);
    this._UsuarioService.actualizarUsuario(this.usuario)
              .subscribe(resp=>{
                  
                console.log(resp);
  });

  }


  seleccionImage(archivo:File){
    if (!archivo){
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir=archivo;
  }


  cambiarImagen(){
    console.log("sdasd12");
    this._UsuarioService.cambiarImagen(this.imagenSubir,this.usuario._id)
  }

  }



