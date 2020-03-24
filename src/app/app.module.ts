import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {appRoutingProviders,routing} from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopaginaComponent } from './nopagina/nopagina.component';
import { DashboardComponent } from './pagina/dashboard/dashboard.component';
import { ProgresoComponent } from './pagina/progreso/progreso.component';
import { Graficas1Component } from './pagina/graficas1/graficas1.component';
import { HeaderComponent } from './opciones/header/header.component';
import { SidebarComponent } from './opciones/sidebar/sidebar.component';
import { BradpanComponent } from './opciones/bradpan/bradpan.component';
import { PaginaComponent } from './pagina/pagina.component';
import { RegistroComponent } from './login/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopaginaComponent,
    DashboardComponent,
    ProgresoComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BradpanComponent,
    PaginaComponent,
    RegistroComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
