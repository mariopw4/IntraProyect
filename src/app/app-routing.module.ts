import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRouter } from './pages/pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuardGuard]},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), PagesRouter],
  exports: [RouterModule]
})
export class AppRoutingModule { }
