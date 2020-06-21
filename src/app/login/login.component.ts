import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  valido: boolean = true;

  constructor(public _us: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    this.forma = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      recordarme: new FormControl(false)
    });
    
    if(localStorage.getItem('email')){
      this.forma.setValue({
        email: localStorage.getItem('email'),
        password: '',
        recordarme: true
      });
    }
  }

  login(){
    if(this.forma.invalid){
      Swal.fire('Error en login', 'Rellene todos los campos correctamente', 'warning');
      return;
    }
    if(this.forma.value.recordarme){
      localStorage.setItem('email', this.forma.value.email);
    }else{
      localStorage.removeItem('email');
    }
    let usuario = new Usuario(null, this.forma.value.email, this.forma.value.password);
    this._us.login(usuario).subscribe(
      resp => this.router.navigateByUrl('/'), 
      err => this.valido = false
      );
  }

}
