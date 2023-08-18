import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';
import { DonneepersoService } from 'src/app/services/donneeperso/donneeperso.service';

@Component({
  selector: 'app-modifierdp',
  templateUrl: './modifierdp.component.html',
  styleUrls: ['./modifierdp.component.scss']
})
export class ModifierdpComponent implements OnInit {
  
  public modifierForm !: FormGroup

  constructor(private dpService: DonneepersoService, private formBuilder: FormBuilder, private router: Router) {
	  
  }
  
  ngOnInit(): void {
    this.modifierForm = this.formBuilder.group({
      userName: [''],
      email:[''],
      password: [''],
      confirmation: ['']
    });
  }

  modifier() {
    let user = this.modifierForm.value;
    this.dpService.modifyUser(user)
      .subscribe({
        next: (res: User) => {
          alert('Compte modifié');
          console.log(res);
          this.modifierForm.reset();
          this.router.navigate(["../donneeperso"])
      },
      error: () => alert("Something went wrong")
    })
  }

}
