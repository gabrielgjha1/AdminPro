import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/servicios/servicios.index';
import { hospitalModel } from 'src/app/models/hospital.model';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
  Hospital:hospitalModel[]=[];
  registrados:number;
  desde:number=0;
  hospital:hospitalModel; 
  activar:boolean=false;
  constructor( public _HospitalService:HospitalService ) { this.TreaerHospitales() }

  ngOnInit(): void {
   
  }
  
  TreaerHospitales(){

    this._HospitalService.TraerHospitales(this.desde).subscribe((resp:any)=>{

    this.Hospital=resp.hospitalesdb;
    this.registrados=resp.conteo;
    console.log(resp);

    });

  }

  CambiarPagina(desde){
   
    let contador = desde + this.desde;
    console.log(contador)
    if (contador>=this.registrados || contador<0 ){
      return;
    }

    this.desde = contador;

    this.TreaerHospitales();

  }


  EliminarUSuario(id:string){
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
        
        this._HospitalService.BorrarHospitales(id).subscribe(resp=>{

          this.TreaerHospitales();

        });
      }
    })
    

  }


  async GuardarHospital(){
    
    
    const { value: email } = await Swal.fire({
      title: 'Ingresa el nombre del hospital',
      input: 'text',
      inputPlaceholder: 'Ingres nombre del hospital'
    })
    
    if (email) {
      
      let hospitals = new hospitalModel(email);
      console.log(hospitals);
      Swal.fire(` Nombre del hospital agregado:  ${email}`)
        this._HospitalService.GuardarHospital(hospitals).subscribe((resp:any)=>{
          this.TreaerHospitales();
        });  
        }

      }

      BuscarHospital(f:string){
        console.log(f);
        if (f==""){
          this.TreaerHospitales();
          return;
        }
        this._HospitalService.BuscarHospital(f).subscribe( (resp:any) =>{

          console.log(resp);
          
          this.Hospital=resp.hospitales;

        });

      }

      prueba(f,id:string){
        if (this.activar==false){
          f.removeAttribute('disabled');
          this.activar=true;
          return
        }

        this.activar=false;
        f.setAttribute('disable',"")

        
        console.log(f)

      }

      Actualizar(id:string,nombre:string){
        
        let hospital = new hospitalModel(nombre);
         this._HospitalService.ActualizarHospital(id,hospital).subscribe((resp:any)=>{
        this.TreaerHospitales();
         
        });

      }



   
  }
