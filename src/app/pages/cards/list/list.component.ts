import { Component } from '@angular/core';
import { EnergyEnum } from 'src/app/enums/energy';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  typeFilter = [
    {
      type: EnergyEnum.water,
      filtered: false,
    },
    {
      type: EnergyEnum.fire,
      filtered: false,
    },
    {
      type: EnergyEnum.plant,
      filtered: false,
    },
    {
      type: EnergyEnum.dark,
      filtered: false,
    },
    {
      type: EnergyEnum.psychic,
      filtered: false,
    },
    {
      type: EnergyEnum.fight,
      filtered: false,
    },
    {
      type: EnergyEnum.light,
      filtered: false,
    },
    {
      type: EnergyEnum.metal,
      filtered: false,
    },
    {
      type: EnergyEnum.incolor,
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
