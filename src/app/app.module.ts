import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
<<<<<<< HEAD
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 6248bcd7f9ac3895f2e6fcdca1ab49959beb24c1

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
<<<<<<< HEAD
    FooterComponent
=======
    ConnexionComponent
>>>>>>> 6248bcd7f9ac3895f2e6fcdca1ab49959beb24c1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
