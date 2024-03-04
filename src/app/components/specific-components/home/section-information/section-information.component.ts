import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-information',
  templateUrl: './section-information.component.html',
  styleUrls: ['./section-information.component.scss'],
})
export class SectionInformationComponent implements OnInit {
  infoCard = [];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.onLangChange.subscribe(() => {
      this.loadSectionData();
    });

    this.loadSectionData();
  }

  loadSectionData() {
    this.translateService.get('sectionInformation').subscribe((translations: any) => {
      this.infoCard = translations.cards;
    });
  }
}
