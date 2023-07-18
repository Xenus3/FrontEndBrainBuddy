import { Component } from '@angular/core';

@Component({
  selector: 'app-tutoriel',
  templateUrl: './tutoriel.component.html',
  styleUrls: ['./tutoriel.component.scss']
})
export class TutorielComponent {
  ngOnInit() {
  }
  // const triangleGauche = document.getElementById('triangle-gauche') as HTMLElement;
  slideRight(): void {
    const slide1 = document.getElementById('slide1') as HTMLElement;
    const slide2 = document.getElementById('slide2') as HTMLElement;
    const slide3 = document.getElementById('slide3') as HTMLElement;
    const circle1 = document.getElementById('circle1') as HTMLElement;
    const circle2 = document.getElementById('circle2') as HTMLElement;
    const circle3 = document.getElementById('circle3') as HTMLElement;
    if (slide1.hidden === false) {
      slide2.hidden = false;
      slide3.hidden = true;
      slide1.hidden = true;
      circle1.classList.remove('circle-active');
      circle1.classList.add('circle-inactive');
      circle2.classList.remove('circle-inactive');
      circle2.classList.add('circle-active');
      } else if (slide2.hidden === false){
        slide3.hidden = false;
        slide1.hidden = true;
        slide2.hidden = true;
        circle2.classList.remove('circle-active');
        circle2.classList.add('circle-inactive');
        circle3.classList.remove('circle-inactive');
        circle3.classList.add('circle-active');
        
      } else if (slide3.hidden === false) {
        slide1.hidden = false;
        slide2.hidden = true;
        slide3.hidden = true;
        circle3.classList.remove('circle-active');
        circle3.classList.add('circle-inactive');
        circle1.classList.remove('circle-inactive');
        circle1.classList.add('circle-active');
      };
  }
  slideLeft(): void {
    const slide1 = document.getElementById('slide1') as HTMLElement;
    const slide2 = document.getElementById('slide2') as HTMLElement;
    const slide3 = document.getElementById('slide3') as HTMLElement;
    const circle1 = document.getElementById('circle1') as HTMLElement;
    const circle2 = document.getElementById('circle2') as HTMLElement;
    const circle3 = document.getElementById('circle3') as HTMLElement;
    if (slide1.hidden === false) {
        slide3.hidden = false;
        slide2.hidden = true;
        slide1.hidden = true;
        circle1.classList.remove('circle-active');
        circle1.classList.add('circle-inactive');
        circle3.classList.remove('circle-inactive');
        circle3.classList.add('circle-active');
      } else if (slide3.hidden === false){
        slide2.hidden = false;
        slide1.hidden = true;
        slide3.hidden = true;
        circle3.classList.remove('circle-active');
        circle3.classList.add('circle-inactive');
        circle2.classList.remove('circle-inactive');
        circle2.classList.add('circle-active');
      } else if (slide2.hidden === false) {
        slide1.hidden = false;
        slide3.hidden = true;
        slide2.hidden = true;
        circle2.classList.remove('circle-active');
        circle2.classList.add('circle-inactive');
        circle1.classList.remove('circle-inactive');
        circle1.classList.add('circle-active');
      };
  }
  flip: string = 'inactive';

  toggle() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
}
