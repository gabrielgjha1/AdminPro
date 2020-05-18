import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-nopagina',
  templateUrl: './nopagina.component.html',
  styleUrls: ['./nopagina.component.css']
})
export class NopaginaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
