import { Component, ElementRef, ViewChild } from '@angular/core';

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
      container.appendChild(cell).className = "tirage " + i;
    }
    };

    ngAfterViewInit(){
      this.makeRows('10','15');;//Put here your function or what you need
    }

  };