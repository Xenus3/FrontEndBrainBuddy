import { Component } from '@angular/core';

@Component({
  selector: 'app-gride',
  templateUrl: './gride.component.html',
  styleUrls: ['./gride.component.scss']
})
export class GrideComponent {

  container = document.getElementById("container");
  
  ngOnInit(): void {
  }

  makeRows(rows: string, cols: string): void {
    const container = document.getElementById('container') as HTMLElement;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    var i : number;
    var y: number = +cols;
    var x: number = +rows;
    
    // masquer le bouton jouer
    // const btnjouer = document.getElementById('btn-jouer') as HTMLElement;
    // btnjouer.hidden = true;


    for (i = 1; i <= y*x; i++) {
      console.log(y*x);
      let cell = document.createElement("div") as HTMLElement;
      cell.innerText = (""+i+"");
      container.appendChild(cell).className = "draw " + i;
      }
    };
  };