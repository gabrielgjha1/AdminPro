import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ConfigServices,SidebarService,SharedService,
        UsuarioService,LoginGuardGuard,SubirService } from './servicios.index'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  providers:[ ConfigServices,SidebarService,SharedService,LoginGuardGuard,UsuarioService,SubirService
    
  ]
})

export class ServiciosModule { }
