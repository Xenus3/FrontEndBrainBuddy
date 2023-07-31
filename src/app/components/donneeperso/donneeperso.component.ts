import { Component } from '@angular/core';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-donneeperso',
  templateUrl: './donneeperso.component.html',
  styleUrls: ['./donneeperso.component.scss']
})
export class DonneepersoComponent {

  donnees: User[] = [{userName: "Karim", email: "karim@gmail.com", password: "1234"}];

}
