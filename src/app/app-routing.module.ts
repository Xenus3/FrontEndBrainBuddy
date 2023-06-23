import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DonneepersoComponent } from './components/donneeperso/donneeperso.component';

const routes: Routes = [
  {
    path: "",
    component: AccueilComponent
  },
  {
    path: "connexion",
    component: ConnexionComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    children: [
      {path: "donneeperso", component: DonneepersoComponent},
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
