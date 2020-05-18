import { Component, OnInit } from '@angular/core';
import { MedicosService} from 'src/app/servicios/medicos/medicos.service';
import { HospitalService} from 'src/app/servicios/hospitales/hospital.service';
import { Medicos } from 'src/app/models/medicos.models';
import { NgForm } from '@angular/forms';
import { hospitalModel } from 'src/app/models/hospital.model';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  nombre:string="";
  
  hospitalmedico:string="Seleccionar Hospital"; 
  hospitalmedicoid:string=""; 
  // si comprobar es true trae todos los hospitales, sino solo el del medico ya registrado
  comprobar:boolean=true;
  hopitales:HospitalService[]=[];
  id:string;

  constructor( public _MedicosServise:MedicosService, public _hospitaleService:HospitalService,
              public router:Router,public _ActivatedRoute:ActivatedRoute ) { 

        //traer el id de mi url
        _ActivatedRoute.params.subscribe(params=>{
          this.id = params['id'];

          if (this.id!='nuevo'){

            this.TraerMedicoID(this.id);
            


          }

        })
    }

  ngOnInit(): void {

    this.TraerHospitales();this.comprobar
  }

  TraerHospitales(){

     this._hospitaleService.TraerHospitales().subscribe((resp:any)=>{
      
      this.hopitales=resp.hospitalesdb;
    

    
    });

  }
  //esta funcion se ejectua si el id que viene en la url tiene algun parametro
  TraerMedicoID(id:string){

    this._MedicosServise.TraerDatosID(id).subscribe((resp:any)=>{
      this.nombre=resp.medicosdb.nombre;
      console.log(resp)
      //ESte comprobrar es para que funcione el select que trae el hospital del medico seleccionado y no todos
      this.comprobar=false;
      this.hospitalmedicoid=resp.medicosdb.hospital._id;
      this.hospitalmedico=resp.medicosdb.hospital.nombre;
      console.log(this.hospitalmedico)
      
    });
    


  }


  // Permite al usuario selecccionar otro hospital al medico
  prueba(evento:Event){

    Swal.fire({
      title: 'Seguro que quiere cambiar el hospital?',
      text: "El hospital a cambiar es: "+this.hospitalmedico,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Cambiar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Cambio!',
          'success'
        )
        // se vuelve true comprobar asi que trae todos los hospitales para actualizar al medico
        this.comprobar=true;
      }
    })

   

  }

  guardarMedico(f:NgForm){
    console.log(this.comprobar);
    if (f.invalid){
      return;
    }

    let medico = new Medicos(f.value.medico,f.value.hospital)
    // Identifica si el medico no es nuevo, en este caso actualiza
    if (this.id!='nuevo'){

      //si solo cambio el nombre ocurre esto
      if (f.value.hospital==""){
        medico = new Medicos(f.value.medico,this.hospitalmedicoid)
      }

     return this._MedicosServise.ActualizarMedicos(this.id,medico).subscribe(resp=>{

        console.log(resp);

      })

    }


    this._MedicosServise.CrearMedico(medico).subscribe((resp:any)=>{

      Swal.fire(
        'Buen trabajo!',
        'Medico Actualizado!',
        'success'
      )

    });

    console.log(medico)
  
   

  
  }

}
