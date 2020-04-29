import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
const routes: Routes = [
//ruta por defecto
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', component: NopaginaComponent }//ruta por si esta mal escrita.
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes)