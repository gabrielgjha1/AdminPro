import { Component, OnInit } from '@angular/core';
import { GraficasService } from 'src/app/servicios/graficas/graficas.service';
import { graficas } from 'src/app/models/graficas.models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styleUrls: ['./graficas1.component.css']
})

export class Graficas1Component implements OnInit {

  forma:FormGroup;
  labels:string[]=[];
  data:number[]=[];
  mostrarGrafica:boolean=false;
  graficas:graficas[]=[];
  grafica2:boolean=false;
  grafica3:boolean=false;
  grafica4:boolean=false;



  constructor(public  _GraficasService: GraficasService ) { }

  ngOnInit(): void {
    this.traerDatos();

    this.forma = new FormGroup({
      labels: new FormControl(null,Validators.required),
      data: new FormControl(null,Validators.required),
      labels2: new FormControl(null,),
      data2: new FormControl(null,),
      labels3: new FormControl(null,),
      data3: new FormControl(null,),
      labels4: new FormControl(null,),
      data4: new FormControl(null,),
      leyenda: new FormControl(null,Validators.required),
      type: new FormControl(null,Validators.required)
    });
  

  }

  traerDatos(){
    this._GraficasService.TraerGraficas().subscribe((resp:any)=>{
      this.graficas = resp.grafica;
      console.log(this.graficas)


    });
  }

  AairGrafica(){
    console.log(this.forma);

    this.labels = [this.forma.value.labels,this.forma.value.labels2,this.forma.value.labels3,this.forma.value.labels4];
    this.data = [this.forma.value.data,this.forma.value.data2,this.forma.value.data3,this.forma.value.data4];


    let Graficas = new graficas(this.labels,this.data,'doughnut',this.forma.value.leyenda) 
    console.log(Graficas)

  
    this._GraficasService.GuardarGraficas(Graficas).subscribe((resp:any)=>{
      this.forma.reset();
      this.traerDatos();
      this.mostrarGrafica=false;

      Swal.fire(
        'Buen trabajo!',
        'Grafica agregada!',
        'success'
      )
      
    });
    

  }

  EliminarGrafica(_id:String){
    let id = _id;
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
        this._GraficasService.EliminarGrafica(id).subscribe((resp:any)=>{
            
            this.traerDatos();
  
        });
      }



    })


  }

  AgregarGragica(cantidad:String){
    console.log(cantidad)
  
    if (this.mostrarGrafica===false){

      if (cantidad==="2"){
        this.grafica2=true;
        this.grafica3=false;
        this.grafica4=false;
      }

      if (cantidad==="3"){
        this.grafica2=false;
        this.grafica3=true;
        this.grafica4=false;
      }

      if (cantidad==="4"){
        this.grafica2=true;
        this.grafica3=true;
        this.grafica4=true;
      }

      console.log(this.grafica2);
      console.log(this.grafica3);
      console.log(this.grafica4);

      return this.mostrarGrafica=true;
    }


    return this.mostrarGrafica=false;
  }

}
