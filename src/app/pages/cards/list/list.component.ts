import { Component, OnInit } from '@angular/core';
import { EnergyEnum } from 'src/app/enums/energy';
import CardModel from 'src/app/models/card-model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
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

  cards: CardModel[] = [];

  constructor(private db: CardService) { }

  ngOnInit(): void {
    this.db.get().subscribe(cards => this.cards = cards);
  }

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
