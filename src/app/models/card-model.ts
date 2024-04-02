import { EnergyEnum } from "../enums/energy";
import DeckModel from "./deck-model";

export default class CardModel {
  id?: number;
  name: string;
  type: EnergyEnum;
  collection: string;
  code: string;
  rotation: string;
  location: 'Deck' | 'Caixa' | 'Lista de Desejo';
  deck: DeckModel | null;
  imageUrl: string | null;
}
