import { Component } from '@angular/core';

@Component({
  selector: 'app-monkey-test-tutoriel',
  templateUrl: './monkey-test-tutoriel.component.html',
  styleUrls: ['./monkey-test-tutoriel.component.scss']
})
export class MonkeyTestTutorielComponent {
  // const triangleGauche = document.getElementById('triangle-gauche') as HTMLElement;

  slideRight(): void {
    const slide1 = document.getElementById('slide1') as HTMLElement;
    const slide2 = document.getElementById('slide2') as HTMLElement;
    const slide3 = document.getElementById('slide3') as HTMLElement;
    if (slide1.hidden === false) {
      slide2.hidden = false;
      slide3.hidden = true;
      slide1.hidden = true;
      } else if (slide2.hidden === false){
        slide3.hidden = false;
        slide1.hidden = true;
        slide2.hidden = true;
        
      } else if (slide3.hidden === false) {
        slide1.hidden = false;
        slide2.hidden = true;
        slide3.hidden = true;
      };
    }
  slideLeft(): void {
    const slide1 = document.getElementById('slide1') as HTMLElement;
    const slide2 = document.getElementById('slide2') as HTMLElement;
    const slide3 = document.getElementById('slide3') as HTMLElement;
    if (slide1.hidden === false) {
      slide3.hidden = false;
      slide2.hidden = true;
      slide1.hidden = true;
      } else if (slide3.hidden === false){
        slide2.hidden = false;
        slide1.hidden = true;
        slide3.hidden = true;
        
      } else if (slide2.hidden === false) {
        slide1.hidden = false;
        slide3.hidden = true;
        slide2.hidden = true;
      };
    }
}
