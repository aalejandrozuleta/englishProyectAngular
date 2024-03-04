import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { InfoCard } from './../../shared/models/infoCard.interface';
import { FavoriteService } from '../../shared/services/favorite.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  favorites: InfoCard[] = [];
  attractions: InfoCard[] = [];
  tourism: InfoCard[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    // Establece el idioma predeterminado como español
    this.translateService.setDefaultLang('es');

    // Escucha los cambios de idioma
    this.translateService.onLangChange.subscribe(() => {
      // Vuelve a cargar la información de las atracciones y el turismo
      this.loadAttractionsAndTourism();
    });

    // Carga las atracciones y el turismo por primera vez
    this.loadAttractionsAndTourism();

    const favoritesFromStorage = localStorage.getItem('favorites');
    if (favoritesFromStorage) {
      this.favorites = JSON.parse(favoritesFromStorage);
    }
  }

  loadAttractionsAndTourism() {
    this.translateService.get('attractions').subscribe((translations: any) => {
      console.log('Translations for attractions:', translations);
      this.attractions = Object.values(translations);
      console.log('Attractions:', this.attractions);
    });
    
    this.translateService.get('tourism').subscribe((translations: any) => {
      console.log('Translations for tourism:', translations);
      this.tourism = Object.values(translations);
      console.log('Tourism:', this.tourism);
    });
  }

  addToFavorites(card: InfoCard) {
    this.favoriteService.addToFavorites(card);
    this.favorites = this.favoriteService.getFavorites();
  }
}
