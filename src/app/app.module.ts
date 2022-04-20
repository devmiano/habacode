import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { faSearch as fasSearch } from '@fortawesome/free-solid-svg-icons';
import { faLocationPin as fasLocation } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay as fasCalendar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons';
import { UserComponent } from './components/user/user.component';
import { RepoComponent } from './components/repo/repo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchService } from './services/search/search.service';
import { DatePipe } from './pipes/date/date.pipe';
import { BackgroundDirective } from './directives/background/background.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    UserComponent,
    RepoComponent,
    NotFoundComponent,
    ProfileComponent,
    ButtonComponent,
    DatePipe,
    BackgroundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(fasSearch, fasEnvelope, fasCalendar, fasLocation);
  }
}
