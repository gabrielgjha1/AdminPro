import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor(
  ) { 

    this.promesa().then(
        mensaje=>{ console.log(mensaje)}
    )
    .catch(error=>console.error(error))

  }
  

  ngOnInit(): void {
  }

  promesa(){

    let promesa = new Promise(( resolve ,rejects)=>{

      let contador = 0;

      let intervalo = setInterval( ()=>{

        contador = contador + 1;

       
            resolve('bien');


      } , 1000 );


    });
    return promesa
  }

}
