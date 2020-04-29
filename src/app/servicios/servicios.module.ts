import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ConfigServices,SidebarService,SharedService,
        UsuarioService,LoginGuardGuard } from './servicios.index'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  providers:[ ConfigServices,SidebarService,SharedService,LoginGuardGuard
    
  ]
})

export class ServiciosModule { }
