import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(public _usuarioservice:UsuarioService,
              public router:Router){}

  canActivate(){
    if (this._usuarioservice.usuario.role==='ADMIN_ROLE'){
      
      return true;

    }else{ 
    
      console.log('bloqueado por el guard'); 
      this.router.navigate(['/login']);
      return false;  
    
    }



  }
  
}
