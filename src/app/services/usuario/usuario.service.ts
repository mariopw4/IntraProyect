import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIO } from '../../config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = '';
  usuario: Usuario;

  constructor(public http: HttpClient, public router: Router) {
    if(localStorage.getItem('token')){
      this.cargarStorage();
    }
   }


  
  login(usuario: Usuario){
    let url = URL_SERVICIO+'/login';
    return this.http.post(url, usuario).pipe(map( (resp: any) => {
      this.guardarStorage(resp.token, resp.usuario);
      return true;
    }));
  }

  logout(){
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/login');
  }

  estaLogueado(){
    return (this.token.length > 3) ? true : false;
  }

  guardarStorage(token: string, usuario: Usuario){
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.token = token;
    this.usuario = usuario;
  }

  cargarStorage(){
    this.token = localStorage.getItem('token');
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }
}
