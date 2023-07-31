import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnexionService } from 'src/app/services/connexion/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

public connexionForm !: FormGroup
public inscriptionForm !: FormGroup

  constructor(private connexionService: ConnexionService, private router: Router, private formBuilder: FormBuilder) {}

ngOnInit(): void {
  this.connexionForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    
   
  });

  this.inscriptionForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
    confirmation: ['', Validators.required]
  });
 }
// Methode pour connecter l'utilisateur
    connexion(): void {

    }
// Methode pour ajouter l'utilisateur a notre base de donneés

    inscription(): void {
	  let user = this.inscriptionForm.value;
      this.connexionService.createUser(user)
      	.subscribe(res=>{
      		alert('SIGNIN SUCCESFUL');
      		this.inscriptionForm.reset()
      		this.router.navigate(["connexion"])
    	},err=>{
      		alert("Something went wrong")
    	})
      
    }
}
