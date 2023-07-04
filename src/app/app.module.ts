import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MonkeyTestTutorielComponent } from './components/monkey-test-tutoriel/monkey-test-tutoriel.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';

import { ProfilemenuComponent } from './components/profilemenu/profilemenu.component';
import { DonneepersoComponent } from './components/donneeperso/donneeperso.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { TrophesComponent } from './components/trophes/trophes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    ConnexionComponent,
    ProfileComponent,
    
    ProfilemenuComponent,
          DonneepersoComponent,
          HistoriqueComponent,
          TrophesComponent,
    MonkeyTestTutorielComponent,
   ConnexionComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
