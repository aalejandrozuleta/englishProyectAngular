import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HomeData } from '../../shared/models/homeData.interface'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myDataBlockSection: HomeData[] = [];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.onLangChange.subscribe(() => {
      this.loadHomeData();
    });

    this.loadHomeData();
  }

  loadHomeData() {
    this.translateService.get('home').subscribe((translations: any) => {
      this.myDataBlockSection = translations.blocks;
    });
  }
}
