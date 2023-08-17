import { Component, OnInit } from '@angular/core';
import { Trophee } from 'src/app/entities/trophee';
import { Usertrophee } from 'src/app/entities/usertrophee';
import { TrophesService } from 'src/app/services/trophes/trophes.service';

@Component({
  selector: 'app-trophes',
  templateUrl: './trophes.component.html',
  styleUrls: ['./trophes.component.scss']
})
export class TrophesComponent implements OnInit {

  trophees: Trophee[] = [];
  
  constructor(private trophesService: TrophesService) {
	  
  }

  ngOnInit(): void {
    this.trophesService.getUserTrophies()
      .subscribe({
        next: (res: Usertrophee[]) => {
          console.log(res);
         res.forEach(element => {
            
            let trophy = {trophee: element.trophy.description, description: element.trophy.description, date: element.trophy.date, rarite: element.trophy.rarite};
            this.trophees.push(trophy);

         });
          
      },
      error: () => alert("Something went wrong")
    });

}
}
