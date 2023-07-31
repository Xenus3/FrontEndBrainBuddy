import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion/connexion.service';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

public connexionForm !: FormGroup
public inscriptionForm !: FormGroup

  constructor(private connexionService: ConnexionService, private formBuilder: FormBuilder, private router: Router) {
	  
  }



ngOnInit(): void {
  this.connexionForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    
   
  });

  this.inscriptionForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email:['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
    confirmation: ['', Validators.required]
  });
}  
// Methode pour connecter l'utilisateur
    connexion(){
    this.connexionService.getUsers()
    .subscribe(res=>{
      const user = res.filter((a:User)=>{
        return a.email === this.connexionForm.value.email && a.password === this.connexionForm.value.password 
      });
      if(user){
        alert('Login Succesful');
        this.inscriptionForm.reset()
      this.router.navigate(["/"])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
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
