import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any[]=[];

/*
  menu: any = [
    {
      titulo:'principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo:'Dashboard', url: '/dashboard' },
        { titulo:'Progreso barra', url: '/progreso' },
        { titulo:'Graficas', url: '/graficas1' },
        { titulo:'Promesas', url: '/Promesas' },
        { titulo:'RxJs', url: '/RxJs' },
  
    ]
    },{
      titulo:'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu:[{titulo:'Usuarios',url:'/usuarios'},
               {titulo:'Medicos',url:'/medicos'},
               {titulo:'Medico',url:'/medico/nuevo'},
               {titulo:'Hospitales',url:'/hospitales'}]
    }
  ]
  */

  constructor(public _usuarioService: UsuarioService) {
    
    
  }
  
  TraerMenu(){
   
    this.menu= this._usuarioService.menu;

   }

}
