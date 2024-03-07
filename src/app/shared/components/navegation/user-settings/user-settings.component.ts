import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent {
  isOpen = false;
  optionsUser: { path: string; name: string }[] = [];

  constructor(private translateService: TranslateService) {
    this.loadUserSettings();
    this.translateService.onLangChange.subscribe(() => {
      this.loadUserSettings();
    });
  }

  loadUserSettings() {
    this.translateService.get('UserSettings.titles').subscribe((translations: any[]) => {
      this.optionsUser = translations.map((title: any) => {
        return { path: title.path, name: title.name };
      });
    });
  }

  toggleContent() {
    this.isOpen = !this.isOpen;
  }
}
