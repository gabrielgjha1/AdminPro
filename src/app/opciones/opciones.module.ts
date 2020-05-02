import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BradpanComponent } from './bradpan/bradpan.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

 
@NgModule({
   imports:[CommonModule,RouterModule,PipesModule],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BradpanComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BradpanComponent
    ]
})

export class opciones {}

