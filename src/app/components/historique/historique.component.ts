import { Component } from '@angular/core';
import { Historique } from 'src/app/entities/historique';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent {

  historique: Historique[] = [{nom: "MonkeyTest", date: "23/06/2023", meilleurscore: "25"}];

}
