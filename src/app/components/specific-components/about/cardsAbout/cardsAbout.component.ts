// cardsAbout.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InfoCard } from './../../../../shared/models/infoCard.interface';

@Component({
  selector: 'app-cardsAbout',
  templateUrl: './cardsAbout.component.html',
  styleUrls: ['./cardsAbout.component.scss'],
})
export class CardsAboutComponent {
  @Input() infoCard: InfoCard = {
    img: '',
    title: '',
    paragraph: '',
  };

  @Output() addToFavoritesEvent = new EventEmitter<InfoCard>();
  // Se eliminan las propiedades attractions y tourism

  ngOnInit() {
    console.log('Info card received in cards about:', this.infoCard);
  }

  constructor() {}

  addToFavorites(card: InfoCard) {
    console.log('Info card in cards about:', this.infoCard);

    this.addToFavoritesEvent.emit(card);
  }
}
