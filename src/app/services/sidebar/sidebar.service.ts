import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menus = [
    {
      nombre:'Perfil', 
      icon: 'fas fa-id-card',
      submenus: [
        {nombre: 'Editar', url:'/perfil'}
      ]
    },
    {
      nombre:'Mantenimiento', 
      icon: 'fas fa-tools',
      submenus: [
        {nombre: 'Usuarios', url: '/usuarios'}
      ]
    }
  ]

  constructor() {}
}
