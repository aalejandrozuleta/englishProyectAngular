import { InfoCard } from './../../shared/models/infoCard.interface';
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../shared/services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  favorites: InfoCard[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {
    const favoritesFromStorage = localStorage.getItem('favorites');
    if (favoritesFromStorage) {
      this.favorites = JSON.parse(favoritesFromStorage);
    }
  }

  removeFromFavorites(card: InfoCard) {
    this.favoriteService.removeFromFavorites(card);
    // Actualizar la lista de favoritos en el componente
    this.favorites = this.favorites.filter(
      (favorite) => favorite.title !== card.title
    );
  }
}
