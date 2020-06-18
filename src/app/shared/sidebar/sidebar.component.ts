import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus = [
    {
      nombre:'Perfil', 
      icon: 'fas fa-id-card',
      submenus: [
        {nombre: 'Editar'}
      ]
    },
    {
      nombre:'Dashboard', 
      icon: 'fas fa-chart-bar',
      submenus: [
        {nombre: 'Notas'},
        {nombre: 'Cursos'},
        {nombre: 'Horario'}
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
