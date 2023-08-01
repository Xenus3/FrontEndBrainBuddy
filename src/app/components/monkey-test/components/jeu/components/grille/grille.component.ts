import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})

export class GrilleComponent implements OnInit {

  // Variables
  life = 3;
  level = 4;
  rows = 5;
  columns = 10;
  draw = this.rows * this.columns;
  container = document.getElementById("tirage");

  grille = new Array(this.draw);

  // Lancement du jeu
  ngOnInit() {
    this.generateGrid();
  }

  generateGrid() {
    let tirages : number[] = [];
    let random : number;
    for (let i = 0; i < this.draw; i++) {
      this.grille[i] = null;
    }
    for (let i = 0; i < this.level; i++){
      do {
        random = this.randomIntFromInterval();
      } while (tirages.includes(random));
      tirages[i] = random;  
      this.grille[random - 1] =  i+1;
    }
  }

  // Génére un nombre aléatoire compris entre 1 et la taille de la grille (this.draw) du jeu 
  randomIntFromInterval() {
    return Math.floor(Math.random() * this.draw + 1)
  }

  // retourne l'ensemble des cartes
  flipCards() {
    const cartesRecto = document.getElementsByClassName("carte-recto");
    const cartesVerso = document.getElementsByClassName("carte-verso");
    for (let i = 0; i < cartesRecto.length; i++) {
      const carte = cartesRecto[i] as HTMLElement;
      carte.hidden = true;
    }
    for (let i = 0; i < cartesVerso.length; i++) {
      const carte = cartesVerso[i] as HTMLElement;
      carte.hidden = false;
    }
  }
  // vérifie si les cartes sont cliquées dans l'ordre croissant
  checkOrder(cell:number) {
    console.log(""+cell+"");
    
  }
}
