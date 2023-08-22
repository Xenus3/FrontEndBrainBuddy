import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/entities/game';
import { ScoreService } from 'src/app/services/score/score.service';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})

export class GrilleComponent implements OnInit {

  // Variables
  life = 3;
  level = 4;
  score = 0;
  rows = 5;
  columns = 10;
  draw = this.rows * this.columns;
  gamediv = document.getElementById("game-screen");
  scorediv = document.getElementById("score-screen");

  grille = new Array(this.draw);
  tirages: number[] = [];
  chain: number = 0;
  cliquedCards: HTMLElement[] = [];
  isPlaying: boolean = false;

  // Timer
  timer: number = 0; // Set the initial countup value (in seconds)
  interval: any;

  // Lancement du jeu
  ngOnInit() {
    this.generateGrid();
    this.timer = 0;
    this.startCountup();
  }

  constructor(private scoreService: ScoreService) {

  }

  // génère la grille selon la taille (colonnes x lignes)fixée
  // et le tirage de "n" (level) cartes
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

  // Launch Timer
  startCountup() {
    this.interval = setInterval(() => {
      this.timer++;
    }, 1000); // Increment the countup every 1 second (1000 ms)
  }

  // Stop Timer



  // Génére un nombre aléatoire entre 1 et la taille de la grille (this.draw) du jeu
  randomIntFromInterval() {
    return Math.floor(Math.random() * this.draw + 1)
  }

  // retourne l'ensemble des cartes
  flipCards() {
    // masque le reco des cartes
    const cartesRecto = document.getElementsByClassName("carte-recto");
    for (let i = 0; i < cartesRecto.length; i++) {
      this.switchHiddenState(cartesRecto[i] as HTMLElement);
    }
    // affiche le verso des cartes
    const cartesVerso = document.getElementsByClassName("carte-verso");
    for (let i = 0; i < cartesVerso.length; i++) {
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
    if (cell === this.chain + 1) {
      parent.classList.add("cliquee");
      this.chain++;
      if (this.chain === this.level) {
        this.score = Math.floor(this.score + this.level * 100 - this.timer * this.level * 70 /100);
        const gamescreen = document.getElementById("game-screen") as HTMLElement;
        const scorescreen = document.getElementById("score-screen") as HTMLElement;
        this.switchHiddenState(gamescreen);
        this.switchHiddenState(scorescreen);
      }
    } else {
      this.life--;
      if (this.life > 0) {
        const gamescreen = document.getElementById("game-screen") as HTMLElement;
        const lifelostscreen = document.getElementById("lifelost-screen") as HTMLElement;
        this.switchHiddenState(gamescreen);
        this.switchHiddenState(lifelostscreen);
      }
      if (this.life === 0) {
        const gamescreen = document.getElementById("game-screen") as HTMLElement;
        const endscreen = document.getElementById("end-screen") as HTMLElement;
        this.switchHiddenState(gamescreen);
        this.switchHiddenState(endscreen);
        this.sendScore();
      }
    }
  }

  sendScore(){
    let game : Game ;
    game = {
      name: "MonkeyTest",
      description:"",
      instructions:""
    };
    let score = {games: game, nbMistake: 3, level: this.level, timeStamp: new Date(), timer: this.score};

    this.scoreService.createScore(score)
      .subscribe(res=>{
        alert('Score register');
    },err=>{
        alert("Something went wrong");
    })
  }
  // appelé lorsque le joueur décide de rejouer depuis l'écran erreur
  restart(life:number,level:number) {
    this.life = life;
    this.level = level;
    this.removeClickedClass();
    const lifelostscreen = document.getElementById("lifelost-screen") as HTMLElement;
    const gamescreen = document.getElementById("game-screen") as HTMLElement;
    this.switchHiddenState(lifelostscreen);
    this.switchHiddenState(gamescreen);

    this.gamereboot();
    // this.flipCards();
    // this.timer=0;
    // this.generateGrid();
  }

  // enlève la classe css "cliquée"
  removeClickedClass() {
    for (let index = 0; index < this.cliquedCards.length; index++) {
      this.cliquedCards[index].classList.remove("cliquee");
    }
  }

  gamereboot() {
    this.flipCards();
    this.timer=0;
    this.generateGrid();
  }

  nextRound() {
    this.removeClickedClass();
    const gamescreen = document.getElementById("game-screen") as HTMLElement;
    const scorescreen = document.getElementById("score-screen") as HTMLElement;
    this.switchHiddenState(scorescreen);
    this.switchHiddenState(gamescreen);
    this.level++;
    this.gamereboot();
    //// active le verso des cartes utilisées lors de la manche précédente
    // this.flipCards();
    // this.timer=0;
    // this.generateGrid();
  }
}
