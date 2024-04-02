import { Component } from '@angular/core';
import { EnergyEnum } from 'src/app/enums/energy';
import { LocationEnum } from 'src/app/enums/location';
import CardModel from 'src/app/models/card-model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  card: CardModel = {
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
  toSave: boolean = true;
  constructor(private db: CardService) { }

  save() {
    if (this.card.name.length < 3) {
      this.sendAlert('Preencha o campo Nome');
      return;
    }
    else if (this.card.collection.length == 0) {
      this.sendAlert('Preencha o campo Coleção');
      return;
    }
    else if (this.card.code.length == 0) {
      this.sendAlert('Preencha o campo Código');
      return;
    }
    else if (!this.card.imageUrl) {
      this.sendAlert('Insira a imagem da carta');
      return;
    }
    else if (this.card.type == EnergyEnum.null) {
      this.sendAlert('Selecione o tipo da carta');
      return;
    }
    else if (this.card.rotation.length < 1) {
      this.sendAlert('Preencha o campo Rotação');
      return;
    }

    if(this.toSave) {
      this.toSave = false;
      this.db.post(this.card).subscribe(() => {
        this.sendAlert('Carta salva!');
        setTimeout(() => this.toSave = true, 5000);
      });
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
