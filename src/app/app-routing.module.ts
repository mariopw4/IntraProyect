import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRouter } from './pages/pages-routing.module';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), PagesRouter],
  exports: [RouterModule]
})
export class AppRoutingModule { }
