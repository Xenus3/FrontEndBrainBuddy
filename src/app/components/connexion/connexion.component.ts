import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ConnexionService } from 'src/app/services/connexion/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {


  constructor(private connexionService: ConnexionService) {}

  connexionForm: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl('', Validators.required),
    motdepasse: new UntypedFormControl('', Validators.required),
    
   
  });

  inscriptionForm: UntypedFormGroup = new UntypedFormGroup({
    nom: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', Validators.required),
    motdepasse: new UntypedFormControl('', [Validators.required, Validators.pattern('(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),
    confirmation: new UntypedFormControl('', Validators.required)
  });
  
// Methode pour connecter l'utilisateur
    connexion(): void {

    }
// Methode pour ajouter l'utilisateur a notre base de donneés
    inscription(): void {
      let user = this.inscriptionForm.value;
      this.connexionService.createUser(user);
    }
}
