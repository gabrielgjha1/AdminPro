import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {appRoutingProviders,routing} from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopaginaComponent } from './nopagina/nopagina.component';

import { RegistroComponent } from './login/registro.component';
import { PaginasModulo } from './pagina/pagina.module';
import { CommonModule } from '@angular/common';
import {ConfigServices} from './servicios/configuracion/config.service';
import {ServiciosModule} from './servicios/servicios.module';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AdminGuard } from './servicios/guards/admin.guard';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopaginaComponent,
    RegistroComponent,
    

  

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    PaginasModulo,
    CommonModule,
    ServiciosModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [
    appRoutingProviders,
    ConfigServices
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
