import { Component } from '@angular/core';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})
export class GrilleComponent {
// Variables
life = 3;
level = 4;
rows = 5;
columns = 10;
draw = this.rows * this.columns;
container = document.getElementById("tirage");
cells: number[] = [];

// Lancement du jeu
ngOnInit(): void {
this.tirageCartes(this.level);
this.makeRows(this.cells);
}

// Tirage de l'emplacement des "n" cartes à deviner (n étant égale au level atteint)
tirageCartes(level:number){
  let tirage : number;
  // pour chaque niveau le tirage (cells) est renouvelé cad nous vidons le tableau
  this.cells = [];
  for (let index = 0; index < level; index++) {
    do {
      // tirage définit l'emplacement de la carte
      tirage = this.randomIntFromInterval();
    } while(this.cells.includes(tirage));
    this.cells[index] = tirage;
  }
  this.cells.forEach(element => {
    console.log(element);
  });
}

// Génére un nombre aléatoire compris entre 1 et la taille de la grille (this.draw) du jeu 
randomIntFromInterval() {
  return Math.floor(Math.random() * this.draw + 1)
}

// Créer la grille
makeRows(cells: number[]): void {
  const container = document.getElementById('tirage') as HTMLElement;
  const btnjouer = document.getElementById('btn-jouer') as HTMLElement;
  container.style.setProperty('--grid-rows', this.rows.toString());
  container.style.setProperty('--grid-cols', this.columns.toString());
 
  for (var i : number = 1; i <= this.draw; i++) {
    let cell = document.createElement("div") as HTMLElement;
    cell.innerText = (""+i+"");
    cell.className = "tirage " + i;
    container.appendChild(cell);
    }
  };

// ngAfterViewInit(){
//   ;//Put here your function or what you need
// }
}
