import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesCardsComponent } from './movies-cards/movies-cards.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SeriesCardsComponent } from './series-cards/series-cards.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesCardsComponent,
    BannerComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchBarComponent,
    SeriesCardsComponent,
    MoviesDetailsComponent,
    SeriesDetailsComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
