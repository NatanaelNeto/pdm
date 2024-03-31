import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  typeFilter = [
    {
      type: 'Incolor',
      filtered: false,
    },
    {
      type: 'Planta',
      filtered: false,
    },
    {
      type: 'Fogo',
      filtered: false,
    },
    {
      type: 'Água',
      filtered: false,
    },
    {
      type: 'Luta',
      filtered: false,
    },
    {
      type: 'Raio',
      filtered: false,
    },
    {
      type: 'Psíquica',
      filtered: false,
    },
    {
      type: 'Metal',
      filtered: false,
    },
    {
      type: 'Escuridão',
      filtered: false,
    },
  ]
  allTypeFiltered = false;
  typeFilterDisplay = false;

  constructor() { }

  toggleTypeFilter(type: string) {
    if (type == 'Todos') {
      this.allTypeFiltered = !this.allTypeFiltered;
      this.typeFilter.forEach(t => t.filtered = this.allTypeFiltered);
      return;
    }
    this.typeFilter.forEach(t => {
      if (t.type == type) t.filtered = !t.filtered;
    })
    this.allTypeFiltered = this.typeFilter.every(t => t.filtered);
  }
}
