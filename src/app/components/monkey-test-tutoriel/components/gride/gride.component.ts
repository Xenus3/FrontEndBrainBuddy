import { Component } from '@angular/core';

@Component({
  selector: 'app-gride',
  templateUrl: './gride.component.html',
  styleUrls: ['./gride.component.scss']
})
export class GrideComponent {

  let container = document.getElementById("container");
  
  ngOnInit(): void {
  }

  makeRows(rows: number, cols: number): void {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      cell.innerText = (i + 1);
      container.appendChild(cell).className = "grid-item" + i;
    };
  };

}
