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
    type: EnergyEnum.null,
    collection: '',
    code: '',
    rotation: '',
    location: LocationEnum.box,
    deck: null,
    imageUrl: '',
  }

  locationEnum = LocationEnum;
  energyEnum = EnergyEnum;

  alertMessage: string = '';
  toAlert: boolean;
  alertTimeout: any;
  constructor() { }

  save() {
    if (this.card.name.length < 3) {
      this.sendAlert('Preencha o campo Nome');
    }
    else if (this.card.collection.length == 0) {
      this.sendAlert('Preencha o campo Coleção');
    }
    else if (this.card.code.length == 0) {
      this.sendAlert('Preencha o campo Código');
    }
    else if (!this.card.imageUrl) {
      this.sendAlert('Insira a imagem da carta');
    }
    else if (this.card.type == EnergyEnum.null) {
      this.sendAlert('Selecione o tipo da carta');
    }
  }

  sendAlert(message: string) {
    clearTimeout(this.alertTimeout);

    this.alertMessage = message;
    this.toAlert = true;
    this.alertTimeout = setTimeout(() => {
      this.toAlert = false;
    }, 5000);
  }
}
