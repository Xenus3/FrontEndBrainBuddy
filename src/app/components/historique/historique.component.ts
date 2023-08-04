import { Component } from '@angular/core';
import { Historique } from 'src/app/entities/historique';
import { Score } from 'src/app/entities/score';
import { HistoriqueService } from 'src/app/services/historique/historique.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent {

  historique: Historique[] = [];

  constructor(private historiqueService: HistoriqueService) {
	  
  }

  ngOnInit(): void {
    this.historiqueService.getUserHistory()
      .subscribe({
        next: (res: Score[]) => {
          console.log(res);
         res.forEach(element => {
            
            let historique = {nom: element.games?.name, date: element.timeStamp, meilleurscore: element.level};
            this.historique.push(historique);

         });
          
      },
      error: () => alert("Something went wrong")
    });

}

}
