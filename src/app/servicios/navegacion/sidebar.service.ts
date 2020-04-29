import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

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
    }
  ]
  constructor() { }
}
