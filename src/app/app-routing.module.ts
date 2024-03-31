import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './pages/cards/cards.component';
import { DecksComponent } from './pages/decks/decks.component';
import { ListComponent } from './pages/cards/list/list.component';
import { DetailsComponent } from './pages/cards/details/details.component';
import { EditComponent } from './pages/cards/edit/edit.component';
import { CreateComponent } from './pages/cards/create/create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, title: 'PDM | Home' },
  {
    path: 'cartas', component: CardsComponent, title: 'PDM | Cartas', children: [
      { path: '', pathMatch: 'full', redirectTo: 'listar' },
      { path: 'listar', component: ListComponent, title: 'PDM | Cartas - Lista' },
      { path: 'detalhes', component: DetailsComponent, title: 'PDM | Cartas - Detalhes' },
      { path: 'editar', component: EditComponent, title: 'PDM | Cartas - Editar' },
      { path: 'criar', component: CreateComponent, title: 'PDM | Cartas - Criar' }
    ]
  },
  { path: 'decks', component: DecksComponent, title: 'PDM | Decks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
