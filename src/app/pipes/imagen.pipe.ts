import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../configuracion/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: string, tipo:string = 'usuarios'): unknown {
  let url = URL_SERVICIOS+'/img/';

    if (!value){
     return url+='usuario/xxx';
    }

    if (value.indexOf('https')>=0){
      return value;
    }

    switch (tipo){

      case 'usuarios':
        url+='usuarios/'+value;
        console.log(url);
        break
      
      default:
        console.log('no existe')

    }
    
    return url;
  }

}
