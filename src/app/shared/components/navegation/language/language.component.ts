import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  optionsLanguage = [
    {
      id: 1,
      img: 'assets/icon/language.svg',
      title: 'English',
      langCode: 'en'
    },
    {
      id: 2,
      img: 'assets/icon/language.svg',
      title: 'Español',
      langCode: 'es'
    }
  ];
  isSubMenuOpen = false;

  constructor(private translateService: TranslateService) { }

  toggleSettings() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  changeLanguage(langCode: string) {
    console.log('Language changed to:', langCode);
    this.translateService.use(langCode);
  }
}
