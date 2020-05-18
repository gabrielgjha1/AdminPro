import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ConfigServices,SidebarService,SharedService,
        UsuarioService,LoginGuardGuard,SubirService,HospitalService,GraficasService,MedicosService,
        AdminGuard } from './servicios.index'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule

  ],
  providers:[ MedicosService,HospitalService,ConfigServices,SidebarService,SharedService,LoginGuardGuard,UsuarioService,SubirService,GraficasService,
    AdminGuard
    
  ]
})

export class ServiciosModule { }
