import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRouter } from './pages-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ModalUploadImageComponent } from '../components/modal-upload-image/modal-upload-image.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [
    PagesComponent,
    PerfilComponent,
    ModalUploadImageComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRouter
  ],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
