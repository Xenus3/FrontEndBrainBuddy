import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { DonneepersoService } from 'src/app/services/donneeperso/donneeperso.service';

@Component({
  selector: 'app-donneeperso',
  templateUrl: './donneeperso.component.html',
  styleUrls: ['./donneeperso.component.scss']
})
export class DonneepersoComponent implements OnInit {

  donnee: User | undefined;

  constructor(private donneepersoService: DonneepersoService) {
	  
  }

  ngOnInit(): void {
    this.donneepersoService.getUserData()
      .subscribe({
        next: (res: User) => {
          console.log(res);
          this.donnee = res;
      },
      error: () => alert("Something went wrong")
    });

      
  }

  delete(): void {
    this.donneepersoService.deleteUser()
    .subscribe({
      next: (res: User) => {
        console.log(res.userName+" a ete supprimé");
        
    },
    error: () => alert("Something went wrong")
  });
  
  }

logout(): void {
  window.localStorage.removeItem("token")
}

}
