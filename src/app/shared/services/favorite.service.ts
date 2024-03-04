// favorite.service.ts
import { Injectable } from '@angular/core';
import { InfoCard } from './../models/infoCard.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  favorites: InfoCard[] = [];

  constructor() {}

  addToFavorites(card: InfoCard) {
    if (!this.favorites.some((favorite) => favorite.title === card.title)) {
      this.favorites.push(card);
      // Guardar la lista de favoritos en localStorage
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  removeFromFavorites(card: InfoCard) {
    const index = this.favorites.findIndex(
      (favorite) => favorite.title === card.title
    );
    if (index !== -1) {
      this.favorites.splice(index, 1);
      // Actualizar la lista de favoritos en localStorage
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  getFavorites(): InfoCard[] {
    return this.favorites;
  }
}
