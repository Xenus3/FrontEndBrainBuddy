import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gride',
  templateUrl: './gride.component.html',
  styleUrls: ['./gride.component.scss']
})
export class GrideComponent {

  container = document.getElementById("tirage");
  
  // Lancement du jeu
  ngOnInit(): void {
    let life = 3;
    let level = 4;
    while (life > 0) {
      this.tirage(level);
      this.makeRows('5','8');
    }
  }

  // Tirage de l'emplacement des n cartes à deviner (n étant le level)
  tirage(level:number){
    let cells : number[];
  }

  // Générer des nombres aléatoires compris dans la taille de la grille
  randomIntFromInterval() {
    return Math.floor(Math.random() * (40 - 1 + 1) + 1)
  }

  // Créer la grille
  makeRows(rows: string, cols: string): void {
    const container = document.getElementById('tirage') as HTMLElement;
    const btnjouer = document.getElementById('btn-jouer') as HTMLElement;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    var i : number;
    var y: number = +cols;
    var x: number = +rows;
    
    for (i = 1; i <= y*x; i++) {
      console.log(y*x);
      let cell = document.createElement("div") as HTMLElement;
      cell.innerText = (""+i+"");
      cell.className = "tirage " + i;
      container.appendChild(cell);
      }
    };

  // ngAfterViewInit(){
  //   ;//Put here your function or what you need
  // }

  };