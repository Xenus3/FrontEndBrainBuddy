import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from 'src/app/entities/token';
import { ConnexionService } from 'src/app/services/connexion/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

public connexionForm !: FormGroup
public inscriptionForm !: FormGroup
private isAuthanticated: Boolean = false;

  constructor(private connexionService: ConnexionService, private formBuilder: FormBuilder, private router: Router) {
	  
  }



ngOnInit(): void {
  this.connexionForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    
   
  });

  this.inscriptionForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email:['', Validators.required],
    password: ['', [Validators.required /*Validators.pattern('(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]*/]],
    confirmation: ['', Validators.required]
  });
}  
// Methode pour connecter l'utilisateur
    connexion(){
    let user = this.connexionForm.value;  
    this.connexionService.logUser(user)
      .subscribe({
        next: (res: Token) => {
          alert('Login SUCCESFUL');
          console.log(res);
          localStorage.setItem('token', res.token);
          this.connexionForm.reset();
          this.router.navigate(["/"])
      },
      error: () => alert("Something went wrong")
    })
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
