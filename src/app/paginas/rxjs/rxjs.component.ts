import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { 

    this.Observable().subscribe(numer=>{
      console.log('Subs',numer);
    })
   
    

  }

  ngOnInit(): void {
  }

  Observable():Observable<any>{

    return new Observable((observel)=>{
      let contador = 0;
      let intervalo = setInterval(()=>{
        contador = contador +1;
        observel.next(contador);

        if (contador==3){
          observel.complete();
        }

      },1000)

    });

   
  }

}
