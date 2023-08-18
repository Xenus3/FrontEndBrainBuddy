import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DonneepersoComponent } from './components/donneeperso/donneeperso.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { TrophesComponent } from './components/trophes/trophes.component';
import { JeuxComponent } from './components/jeux/jeux.component';
import { MonkeyTestComponent } from './components/monkey-test/monkey-test.component';
import { JeuComponent } from './components/monkey-test/components/jeu/jeu.component';
import { TutorielComponent } from './components/monkey-test/components/tutoriel/tutoriel.component';
import { ViewGraphComponent } from './components/view-graph/view-graph.component';
import { ModifierdpComponent } from './components/modifierdp/modifierdp.component';


const routes: Routes = [
  {
    path: "",
    component: AccueilComponent
  },
  {
    path: "monkeytest",
    component: MonkeyTestComponent,
    children: [
      {path: "tutoriel", component: TutorielComponent},
      {path: "jeu", component: JeuComponent},
    ]
  },
  {
    path: "connexion",
    component: ConnexionComponent
  },
  {
    path: "jeux",
    component: JeuxComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
   
    children: [
      {path: "donneeperso", component: DonneepersoComponent},
      {path: "historique", component: HistoriqueComponent},
      {path: "trophes", component: TrophesComponent},
      {path: "modifierdp", component: ModifierdpComponent},
    ]
  },{
    path: "classement",
    component: ViewGraphComponent
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
