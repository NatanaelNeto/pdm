import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './pages/cards/cards.component';
import { DecksComponent } from './pages/decks/decks.component';
import { ListComponent } from './pages/cards/list/list.component';
import { DetailsComponent } from './pages/cards/details/details.component';
import { EditComponent } from './pages/cards/edit/edit.component';
import { CreateComponent } from './pages/cards/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardsComponent,
    DecksComponent,
    ListComponent,
    DetailsComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
