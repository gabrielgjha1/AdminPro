import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PaginaComponent } from './pagina.component';
import { opciones } from '../opciones/opciones.module';
import { PaginasRutas } from './pages.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgresoComponents } from '../componente/progreso/progreso.component';
import { ChartsModule } from 'ng2-charts'
import { ComponenteGraficaComponent } from '../componente/componente-grafica/componente-grafica.component';
import { ConfigComponent } from './config/config.component';
import { RouterModule } from '@angular/router';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from '../paginas/rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos/medicos.component';
import { MedicoComponent } from './medico/medico/medico.component';


@NgModule(
    {
        declarations:[
            PaginaComponent,
            DashboardComponent,
            ProgresoComponent,
            Graficas1Component,
            ProgresoComponents,
            ComponenteGraficaComponent,
            ConfigComponent,
            PromesasComponent,
            RxjsComponent,
            PerfilComponent,
            UsuarioComponent,
            HospitalesComponent,
            MedicosComponent,
            MedicoComponent,
        
    


        ],
        exports: [
            PaginaComponent,
            DashboardComponent,
            ProgresoComponent,
            Graficas1Component,
            ProgresoComponents,
            ComponenteGraficaComponent
        ],
        imports: [
            opciones,
            PaginasRutas,
            FormsModule,
            ChartsModule,
            RouterModule,
            PipesModule,
            BrowserModule,
            CommonModule,
            ReactiveFormsModule
         
         
            
        ]
    })

    export class PaginasModulo{}

