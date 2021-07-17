import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule, } from "@angular/material/card";
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from "@angular/material/slider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatChipsModule } from "@angular/material/chips";

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';
import { MovieService } from "./services/movie.service";
import { ModalComponent } from './components/modal/modal.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageComponent,
    ModalComponent,
    WatchlistComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSliderModule,
    MatGridListModule,
    MatChipsModule
  ],
  exports:[FormsModule,
    MatDialogModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
