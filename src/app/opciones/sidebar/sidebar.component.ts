import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/servicios/servicios.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   
  constructor(public _sidebarservice:SidebarService) { 
    console.log()
  }


  ngOnInit(): void {
  }

}
