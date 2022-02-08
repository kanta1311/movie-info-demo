import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PosterComponent } from './poster/poster.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HeadingComponent } from './heading/heading.component';
import { MovieCatalogueComponent } from './movie-catalogue/movie-catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListItemComponent,
    MovieListComponent,
    PosterComponent,
    MovieDetailsComponent,
    HeadingComponent,
    MovieCatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
