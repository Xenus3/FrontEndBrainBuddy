import { Component } from '@angular/core';
import { Trophee } from 'src/app/entities/trophee';
import { TrophesService } from 'src/app/services/trophes/trophes.service';

@Component({
  selector: 'app-trophes',
  templateUrl: './trophes.component.html',
  styleUrls: ['./trophes.component.scss']
})
export class TrophesComponent {

  trophees: Trophee[] = [];
  
  constructor(private trophesService: TrophesService) {
	  
  }

  ngOnInit(): void {
    this.trophesService.getUserTrophies()
      .subscribe({
        next: (res: Trophee[]) => {
          console.log(res);
         res.forEach(element => {
            
            let trophy = {trophee: element.trophee, description: element.description, date: element.date, rarite: element.rarite};
            this.trophees.push(trophy);

         });
          
      },
      error: () => alert("Something went wrong")
    });

}
}
