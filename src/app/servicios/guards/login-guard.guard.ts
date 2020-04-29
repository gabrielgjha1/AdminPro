import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UsuarioService } from '../usuario/usuario.service'


Router

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public _UsuarioService:UsuarioService,
              public router:Router ){

  }

  canActivate()  {
    if (this._UsuarioService.estaLogueado()){
      console.log('paso por aqui')
      return true;
    }
    else {
      console.log('NO pasaste ')
      this.router.navigate(['/login'])
      return false;
    }

  }
  
}
