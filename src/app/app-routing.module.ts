import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './pages/cards/cards.component';
import { DecksComponent } from './pages/decks/decks.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', title: 'PDM | Home' },
  { path: 'home', component: HomeComponent, title: 'PDM | Home' },
  { path: 'cartas', component: CardsComponent, title: 'PDM | Cartas' },
  { path: 'decks', component: DecksComponent, title: 'PDM | Decks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
