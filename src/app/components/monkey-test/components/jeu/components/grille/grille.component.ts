import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})

export class GrilleComponent implements OnInit {

  // Variables
  life = 0;
  level = 4;
  rows = 5;
  columns = 10;
  draw = this.rows * this.columns;
  gamediv = document.getElementById("game-screen");
  scorediv = document.getElementById("score-screen");

  grille = new Array(this.draw);
  tirages: number[] = [];
  chain: number = 0;
  cliquedCards: HTMLElement[] = [];

  // Lancement du jeu
  ngOnInit() {
    this.life = 3;
    this.generateGrid();
  }

  // appelé lorsque le joueur décide de rejouer depuis l'écran erreur
  restart(life:number,level:number) {
    this.life = life;
    this.level = level;
    this.generateGrid();
  }

  // génère la grille selon la taille fixée en variable d'instance et le niveau atteint
  generateGrid() {
    let random: number;
    this.grille = [];
    this.tirages = [];
    for (let i = 0; i < this.draw; i++) {
      this.grille[i] = null;
    }
    for (let i = 0; i < this.level; i++) {
      do {
        random = this.randomIntFromInterval();
      } while (this.tirages.includes(random));
      this.tirages[i] = random;
      console.log(this.tirages[i]);
      console.log(this.tirages);
      this.grille[random - 1] = i + 1;
    }
    this.chain = 0;
  }

  // Génére un nombre aléatoire compris entre 1 et la taille de la grille (this.draw) du jeu 
  randomIntFromInterval() {
    return Math.floor(Math.random() * this.draw + 1)
  }

  // retourne l'ensemble des cartes
  flipCards() {
    const cartesRecto = document.getElementsByClassName("carte-recto");
    for (let i = 0; i < cartesRecto.length; i++) {
      this.switchHiddenState(cartesRecto[i] as HTMLElement);
    }
    const cartesVerso = document.getElementsByClassName("carte-verso");
    for (let i = 0; i < cartesVerso.length; i++) {
      // // tentative de régler le problème des cartes qui disparaissent une fois cliquée ou au lancement de la grille
      // cartesVerso[i].classList.remove("cliquee");
      this.switchHiddenState(cartesVerso[i] as HTMLElement);
    }
  }

    // (De)Masquer l'élément HTML envoyé
    switchHiddenState(screen: HTMLElement) {
      screen.hidden = !screen.hidden;
    }
  

  // vérifie si les cartes sont cliquées dans l'ordre croissant
  checkOrder(cell: number, event: Event) {
    let parent = (<HTMLElement>event.target).parentElement as HTMLElement;
    this.cliquedCards[this.chain] = parent;
    // console.log(parent.classList);
    if (cell === this.chain + 1) {
      parent.classList.add("cliquee");
      this.chain++;
      if (this.chain === this.level) {
        const gamescreen = document.getElementById("game-screen") as HTMLElement;
        const scorescreen = document.getElementById("score-screen") as HTMLElement;   
        this.switchHiddenState(gamescreen);
        this.switchHiddenState(scorescreen);
      }
    } else {
      this.life--;
      if (this.life === 0) {
        const gamescreen = document.getElementById("game-screen") as HTMLElement;
        const endscreen = document.getElementById("end-screen") as HTMLElement;   
        this.switchHiddenState(gamescreen);
        this.switchHiddenState(endscreen);
      }
    }
  }

  nextRound() {
    for (let index = 0; index < this.cliquedCards.length; index++) {
      this.cliquedCards[index].classList.remove("cliquee");
    }
    const gamescreen = document.getElementById("game-screen") as HTMLElement;
    const scorescreen = document.getElementById("score-screen") as HTMLElement;
    this.switchHiddenState(scorescreen);
    this.switchHiddenState(gamescreen);
    this.level++;
    this.flipCards();
    this.generateGrid();
  }
}
