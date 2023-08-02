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

  // Lancement du jeu
  ngOnInit() {
    this.life = 3;
    this.generateGrid();
  }

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
      const carte = cartesRecto[i] as HTMLElement;
      carte.hidden = true;
    }
    const cartesVerso = document.getElementsByClassName("carte-verso");
    for (let i = 0; i < cartesVerso.length; i++) {
      const carte = cartesVerso[i] as HTMLElement;
      carte.hidden = false;
    }
  }

  // vérifie si les cartes sont cliquées dans l'ordre croissant
  checkOrder(cell: number, event: Event) {
    let parent = (<HTMLElement>event.target).parentElement as HTMLElement;
    console.log(parent.classList);
    if (cell === this.chain + 1) {
      parent.innerHTML = "";
      parent.classList.remove("carte-verso")
      parent.classList.add("carte-vide")
      this.chain++;
      if (this.chain === this.level) {
        const gamescreen = document.getElementById("game-screen") as HTMLElement;
        const scorescreen = document.getElementById("score-screen") as HTMLElement;   
        this.switchScreen(gamescreen);
        this.switchScreen(scorescreen);
      }
    } else {
      this.life--;
      console.log("vie restante");
      console.log(this.life);
      if (this.life === 0) {
        const gamescreen = document.getElementById("game-screen") as HTMLElement;
        const endscreen = document.getElementById("end-screen") as HTMLElement;   
        this.switchScreen(gamescreen);
        this.switchScreen(endscreen);
      }
    }
  }

  // Masquer l'élément HTML envoyé
  switchScreen(screen: HTMLElement) {
    screen.hidden = !screen.hidden;
  }

  nextRound() {
    const gamescreen = document.getElementById("game-screen") as HTMLElement;
    const scorescreen = document.getElementById("score-screen") as HTMLElement;
    this.switchScreen(scorescreen);
    this.switchScreen(gamescreen);
    this.level++;
    this.flipCards();
    this.generateGrid();
  }
}
