import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { MonkeyTestComponent } from './components/monkey-test/monkey-test.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilemenuComponent } from './components/profilemenu/profilemenu.component';
import { DonneepersoComponent } from './components/donneeperso/donneeperso.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { TrophesComponent } from './components/trophes/trophes.component';
import { JeuxComponent } from './components/jeux/jeux.component';
import { JeuComponent } from './components/monkey-test/components/jeu/jeu.component';
import { GrilleComponent } from './components/monkey-test/components/jeu/components/grille/grille.component';
import { ViewGraphComponent } from './components/view-graph/view-graph.component';
import { ModifierdpComponent } from './components/modifierdp/modifierdp.component' ;



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    FooterComponent,
    ConnexionComponent,
    ProfileComponent,
    ProfilemenuComponent,
          DonneepersoComponent,
          HistoriqueComponent,
          TrophesComponent,
    MonkeyTestComponent,
    JeuxComponent,
    JeuComponent,
    GrilleComponent,
    ViewGraphComponent,
    ModifierdpComponent
   
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
