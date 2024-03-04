import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.scss'],
})
export class BackgroundImageComponent implements OnInit {
  backgroundImage = { title: '', paragraph: '' };

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.onLangChange.subscribe(() => {
      this.loadSectionData();
    });

    this.loadSectionData();
  }

  loadSectionData() {
    this.translateService.get('backgroundImage').subscribe((translations: any) => {
      this.backgroundImage = translations;
    });
  }
}
