import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GrilleComponent } from './components/grille/grille.component';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})

export class JeuComponent implements AfterViewInit {
  @ViewChild(GrilleComponent) grilleComponentLife: any
  life : any;

  @ViewChild(GrilleComponent) grilleComponentLevel: any
  level : any;

  ngAfterViewInit() {
    this.life = this.grilleComponentLife.life;
    this.level = this.grilleComponentLevel.level;
  }

}
