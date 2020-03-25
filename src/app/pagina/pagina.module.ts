import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PaginaComponent } from './pagina.component';
import { opciones } from '../opciones/opciones.module';
import { PaginasRutas } from './pages.routes';


@NgModule(
    {
        declarations:[
            PaginaComponent,
            DashboardComponent,
            ProgresoComponent,
            Graficas1Component
        ],
        exports: [
            PaginaComponent,
            DashboardComponent,
            ProgresoComponent,
            Graficas1Component
        ],
        imports: [
            opciones,
PaginasRutas
        ]
    })

    export class PaginasModulo{}

