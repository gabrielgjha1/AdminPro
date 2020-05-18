import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios:Usuario[]=[];

  desde:number=0;
  registros:number;
  cargar:boolean = true;
  _id:string;
  constructor(public _Usuarioservice:UsuarioService ) {  }

  ngOnInit(): void {
    this.TraerDatos();



  }

  TraerDatos(){
    
    return this._Usuarioservice.TraerUsuarios(this.desde)
                  .subscribe((resp:any)=>{
                    
                    this.registros = resp.conteo;
                    this.usuarios  = resp.usuarios;
                    this.cargar = false;

                  })

  }

  BuscarDatos(datos:string){

    if (datos.length<=0){
      this.TraerDatos();
    }
    this._Usuarioservice.BuscarUsuarios(datos)
        .subscribe((resp:any)=>{
          
          this.usuarios  = resp.usuarios;

    });

  }

  Paginacion(valor:number){

    
    let desde =this.desde +valor;
    if ( desde<0){
      return;
    }

    if (desde>this.registros){
      return;
    }

    this.desde=desde;

    this.TraerDatos();
  }

  EliminarUsuario(id:string){

    this._id = this._Usuarioservice.usuario._id;

    if (this._id===id){

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puede borrar su propio usuario!',
        footer: '<a href>Why do I have this issue?</a>'
      })
      return;

    }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this._Usuarioservice.EliminarUsuario(id)
                            .subscribe(resp=>{
                              
                              this.TraerDatos();

                              console.log(resp);
    
                            })
      }
      
    })




  }

  ActualizarRol(usuario:Usuario){

    this._Usuarioservice.actualizarUsuario(usuario).subscribe(resp=>{

      console.log(resp  )

    })

  }



}
