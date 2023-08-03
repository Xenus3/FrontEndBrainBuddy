import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {interval} from 'rxjs';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements OnInit {

  // Paragraphe de test

  paragraphs = [
    "ac orci amet nulla facilisi morbi tempus",
    ];

  // value
  typingText!: HTMLInputElement  | null;
  inpField!: HTMLInputElement  | null;

  inputForm: FormControl = new FormControl();

  tryAgainBtn!: HTMLInputElement  | null;
  timeTag!: HTMLInputElement  | null;
  mistakeTag!: HTMLInputElement  | null;
  wpmTag!: HTMLInputElement  | null;
  cpmTag!: HTMLInputElement  | null;
   timer!:  any;
   valeuralacon = "hola";
   maxTime= 60 ;
   timeLeft = this.maxTime;
   charIndex = 0;
   mistakes = 0;
   isTyping: any;

   // Load le paragraphe dans la case

  loadParagraph() {
    const ranIndex = Math.floor(Math.random() * this.paragraphs.length);
    this.typingText.innerHTML = "";
    this.paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>`+char+`</span>`
        this.typingText.innerHTML += span;
    });
    this.typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => this.inpField.focus());
    this.typingText.addEventListener("click", () => this.inpField.focus());
  }

  initTyping() {
    let characters = this.typingText.querySelectorAll("span");
    let typedChar = this.inpField.value.split("")[this.charIndex];
    console.log(typedChar);
    console.log(this.charIndex);
    if(this.charIndex < characters.length - 1 && this.timeLeft > 0) {
        if(!this.isTyping) {
            //setInterval(this.initTimer, 1000);
            this.timer = setInterval(() => {
              console.log(this.timeLeft);
              if(this.timeLeft > 0) {
                  this.timeLeft--;
                  this.timeTag.innerText = this.timeLeft.toString();
                  let wpm = Math.round(((this.charIndex - this.mistakes)  / 5) / (this.maxTime - this.timeLeft) * 60);
                  this.wpmTag.innerText = wpm.toString();
              } else {
                  clearInterval(this.timer);
              }
            }, 1000);
            this.isTyping = 1;
        }
        if(typedChar == undefined) { // verifie si tu a delete un caractere ou ajouter un caracter
            if(this.charIndex > 0) {
                this.charIndex--;
                if(characters[this.charIndex].classList.contains("incorrect")) {
                    this.mistakes--;
                }
                characters[this.charIndex].classList.remove("correct", "incorrect");
                characters[this.charIndex].setAttribute("style", "");
            }
        } else { // ajout d'un caracter et supprime le precedent
            if(characters[this.charIndex].innerText == typedChar) {
                characters[this.charIndex].classList.add("correct");
                characters[this.charIndex].setAttribute("style", "color:#56964f;");
            } else {
                this.mistakes++;
                characters[this.charIndex].classList.add("incorrect");
                characters[this.charIndex].setAttribute("style", "color:#cb3439;");
            }
            this.charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[this.charIndex].classList.add("active");

        let wpm = Math.round(((this.charIndex - this.mistakes)  / 5) / (this.maxTime - this.timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        
        this.wpmTag.innerText = wpm.toString();
        this.mistakeTag.innerText = this.mistakes.toString();
        this.cpmTag.innerText = (this.charIndex - this.mistakes).toString();
    } else {
        clearInterval(this.timer);
        characters[this.charIndex].classList.add("correct");
        characters[this.charIndex].setAttribute("style", "color:#56964f;");
        this.inpField.value = "";
        // send score
    }   
  }

  initTimer() {
    console.log(this.timeLeft);
    if(this.timeLeft > 0) {
      
        this.timeLeft--;
        this.timeTag.innerText = this.timeLeft.toString();
        let wpm = Math.round(((this.charIndex - this.mistakes)  / 5) / (this.maxTime - this.timeLeft) * 60);
        this.wpmTag.innerText = wpm.toString();
    } else {
        clearInterval(this.timer);
    }
  }

  resetGame() {
    console.log("je reset");
    this.loadParagraph();
    clearInterval(this.timer);
    this.timeLeft = this.maxTime;
    this.charIndex = this.mistakes = this.isTyping = 0;
    this.inpField.value = "";
    this.timeTag.innerText = this.timeLeft.toString();
    this.wpmTag.innerText = 0+"";
    this.mistakeTag.innerText = 0+"";
    this.cpmTag.innerText = 0+"";
  }

  ngOnInit(): void {
    this.typingText = document.querySelector(".typing-text p");
    this.inpField = document.querySelector(".wrapper .input-field"),
    this.tryAgainBtn = document.querySelector(".content button"),
    this.timeTag = document.querySelector(".time span b"),
    this.mistakeTag = document.querySelector(".mistake span"),
    this.wpmTag = document.querySelector(".wpm span"),
    this.cpmTag = document.querySelector(".cpm span");
    this.loadParagraph();
    //this.inpField.addEventListener("input", this.initTyping);
    //this.tryAgainBtn.addEventListener("click", this.resetGame);
    this.inpField.focus();

    this.inputForm.valueChanges.subscribe(value => {
      this.initTyping();
    });
  }

}

