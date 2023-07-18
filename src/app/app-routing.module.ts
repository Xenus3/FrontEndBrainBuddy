import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MonkeyTestTutorielComponent } from './components/monkey-test-tutoriel/monkey-test-tutoriel.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DonneepersoComponent } from './components/donneeperso/donneeperso.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { TrophesComponent } from './components/trophes/trophes.component';
import { JeuxComponent } from './components/jeux/jeux.component';
import { GrideComponent } from './components/monkey-test-tutoriel/components/gride/gride.component';
import { TutorielComponent } from './components/monkey-test-tutoriel/components/tutoriel/tutoriel.component';


const routes: Routes = [
  {
    path: "",
    component: AccueilComponent
  },
  {
    path: "monkeytest",
    component: MonkeyTestTutorielComponent,
    children: [
      {path: "tutoriel", component: TutorielComponent},
      {path: "grid", component: GrideComponent},
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
    ]
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
