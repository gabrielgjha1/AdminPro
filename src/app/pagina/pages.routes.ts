import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './pagina.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const routes: Routes = [
    {
         path: '', component: PaginaComponent,
         children: [ 
         { path: 'progreso', component: ProgresoComponent },
         { path: 'dashboard', component: DashboardComponent },
         { path: 'graficas1', component: Graficas1Component },
         {path:'',redirectTo:'/dashboard',pathMatch:'full'}
        
        ]
}
];

export const PaginasRutas = RouterModule.forChild(routes);