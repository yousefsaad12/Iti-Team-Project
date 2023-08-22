import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesCardsComponent } from './movies-cards/movies-cards.component';
import { SeriesCardsComponent } from './series-cards/series-cards.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = 
[
  { path: 'home', component:HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesCardsComponent},
  { path: 'series', component: SeriesCardsComponent},
  { path: 'movies_Details/:id', component:MoviesDetailsComponent },
  { path: 'series_Details/:id', component:SeriesDetailsComponent },
  {path:'cart', component:CartPageComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
