import { Component } from '@angular/core';
import { Trophee } from 'src/app/entities/trophee';

@Component({
  selector: 'app-trophes',
  templateUrl: './trophes.component.html',
  styleUrls: ['./trophes.component.scss']
})
export class TrophesComponent {

  trophees: Trophee[] = [{trophee: "../../../assets/icons/trophe.png", description: "Obtenu pour avoir gangé 10 fois", date: "21/03/2022", rarite: "Rare"}];
  

}
