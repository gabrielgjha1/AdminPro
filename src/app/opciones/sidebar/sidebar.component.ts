import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from 'src/app/servicios/servicios.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   
  constructor(public _sidebarservice:SidebarService,
              public _UsuarioService:UsuarioService) { 
    console.log()
  }


  ngOnInit(): void {
  }

}
