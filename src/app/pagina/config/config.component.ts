import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ConfigServices } from 'src/app/servicios/servicios.index';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
              public _ajustes: ConfigServices) { }

  ngOnInit(): void {
  }

  cambioColor(color:string,link:any){
    this.AñadirCheck(link)
    let url = `assets/css/colors/${color}.css`;
    this._document.getElementById('tema').setAttribute('href',url)

    this._ajustes.ajustes.tema=color;
    this._ajustes.ajustes.temaUrl=url;

    this._ajustes.guardarAjustes();

  }

  AñadirCheck(link:any){
      let selectos: any = document.getElementsByClassName('selector');
      console.log(selectos)
      for (let key of selectos) {
        key.classList.remove('working');
      }

      link.classList.add('working')



  }


}
