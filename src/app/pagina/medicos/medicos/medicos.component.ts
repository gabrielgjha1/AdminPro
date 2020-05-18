import { Component, OnInit } from '@angular/core';
import { MedicosService } from 'src/app/servicios/servicios.index';
import { Medicos } from 'src/app/models/medicos.models';
import { hospitalModel } from 'src/app/models/hospital.model';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos:Medicos[]=[];
  registro:Number;
  desde:number=0;
  constructor(public _MedicosService:MedicosService) { this.TraerDatos(); }

  ngOnInit(): void {
  }

  TraerDatos(){
    this._MedicosService.TraerDatos(this.desde).subscribe((resp:any)=>{

      this.medicos=resp.meidicosdb;
   
      this.registro=resp.conteo;
      console.log(this.medicos)
      

    });

  }


  EliminarUsuarios(id:String){

    Swal.fire({
      title: 'Estas seguro?',
      text: "No se podran recuperar los hospitales borrados",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Borrar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          'Tu archivo a sido borrado.',
          'success'
        )

          this._MedicosService.BorrarMedicos(id).subscribe((resp:any)=>{
            console.log(resp);
            this.TraerDatos();
          });
      }
    });
  }

  CambiarPag(numero:number){
    let numer = numero+this.desde;

    if (numer>this.registro || numer<0  ){
      return;
    }
    
    this.desde= numer
    this.TraerDatos()

  }


}
