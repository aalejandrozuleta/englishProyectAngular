import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  optionMenu = [
    { path: 'home', name: 'Inicio' },
    { path: 'about', name: 'Sobre el país' },
    { path: 'favorite', name: 'Favorito' }
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.loadNavBar();
    this.translateService.onLangChange.subscribe(() => {
      this.loadNavBar();
    });
  }
  
  loadNavBar() {
    this.translateService.get('navBar.titles').subscribe((translations: any[]) => {
      this.optionMenu.forEach((option, index) => {
        option.name = translations[index].name;
      });
    });
  }
}
