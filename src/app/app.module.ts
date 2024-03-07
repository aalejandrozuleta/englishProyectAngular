import { FormsComponent } from './components/specific-components/forms/forms.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/navegation/header/header.component';
import { LanguageComponent } from './shared/components/navegation/language/language.component';
import { NavbarComponent } from './shared/components/navegation/navbar/navbar.component';
import { NightModeComponent } from './shared/components/navegation/night-mode/night-mode.component';
import { UserSettingsComponent } from './shared/components/navegation/user-settings/user-settings.component';
import { BackgroundImageComponent } from './components/specific-components/home/background-image/background-image.component';
import { SectionInformationComponent } from './components/specific-components/home/section-information/section-information.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Card3dComponent } from './components/common/card3d/card3d.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { SectionBlockComponent } from './components/common/sectionBlock/sectionBlock.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CardsAboutComponent } from './components/specific-components/about/cardsAbout/cardsAbout.component';
import { InputFormComponent } from './shared/components/inputForm/inputForm.component';
import { LoginComponent } from './pages/login/login.component';
import { SingUpComponent } from './pages/singUp/singUp.component';




//translate
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
//

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LanguageComponent,
    NavbarComponent,
    NightModeComponent,
    UserSettingsComponent,
    BackgroundImageComponent,
    SectionInformationComponent,
    HomeComponent,
    FavoriteComponent,
    AboutComponent,
    Card3dComponent,
    SectionBlockComponent,
    FooterComponent,
    CardsAboutComponent,
    InputFormComponent,
    LoginComponent,
    SingUpComponent,
    FormsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
