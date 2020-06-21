import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AuthGuardGuard } from '../services/guards/auth-guard.guard';

const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        canActivate: [AuthGuardGuard],
        children:[
            {path: 'perfil', component: PerfilComponent},
            {path: 'usuarios', component: UsuariosComponent},
            {path: '', pathMatch: 'full', redirectTo:'/perfil'}     
        ]
     },
 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRouter {}
