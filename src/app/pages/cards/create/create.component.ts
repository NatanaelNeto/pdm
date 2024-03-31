import { Component } from '@angular/core';
import { EnergyEnum } from 'src/app/enums/energy';
import { LocationEnum } from 'src/app/enums/location';
import CardModel from 'src/app/models/card-model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  card: CardModel = {
    id: 0,
    name: '',
    type: EnergyEnum.fire,
    collection: '',
    code: '',
    location: LocationEnum.box,
    deck: null,
    imageUrl: null
  }

  locationEnum = LocationEnum;
  energyEnum = EnergyEnum;
  constructor() { }

}
