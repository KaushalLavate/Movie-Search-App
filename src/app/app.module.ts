import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule, } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './page/page.component';
import { SearchComponent } from './search/search.component';
import { MovieService } from "./services/movie.service";
import { baseURL } from "./models/movie";
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import 'hammerjs';
 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageComponent,
    SearchComponent,
    ModalComponent
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
    MatSnackBarModule
  ],
  providers: [
    MovieService,
    { provide: 'BaseURL', useValue:baseURL }
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    ModalComponent,
    PageComponent
  ]
})
export class AppModule { }
