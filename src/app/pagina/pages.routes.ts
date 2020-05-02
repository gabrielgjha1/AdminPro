import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './pagina.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ConfigComponent } from './config/config.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from '../paginas/rxjs/rxjs.component';
import {LoginGuardGuard} from "../servicios/servicios.index";
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
    {
         path: '', component: PaginaComponent,
         canActivate:[LoginGuardGuard],
         children: [ 
         { path: 'progreso', component: ProgresoComponent },
         { path: 'dashboard', component: DashboardComponent },
         { path: 'graficas1', component: Graficas1Component },
         { path: 'configuracion', component: ConfigComponent },
         { path: 'Promesas', component: PromesasComponent },
         { path: 'RxJs', component: RxjsComponent },
         { path: 'Perfil', component: PerfilComponent },
         {path:'',redirectTo:'/dashboard',pathMatch:'full'}
        
        ]
}
];

export const PaginasRutas = RouterModule.forChild(routes);