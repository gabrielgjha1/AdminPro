import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styles: []
})
export class PaginaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
