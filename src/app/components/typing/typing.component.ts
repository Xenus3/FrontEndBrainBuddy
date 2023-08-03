import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements OnInit {

  // Paragraphe de test

  paragraphs = [
    "ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus",
    "ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque",
    "eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor",
    "ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum",
    "felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc",
    "elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus",
    "velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam",
    "sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper",
    "tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt",
    "bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa"
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
   timer!:  number | null ;
   valeuralacon = "hola";
   maxTime= 60 ;
   timeLeft = this.maxTime;
   charIndex = 0;
   mistakes = 0;
   isTyping = 0;

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
            // this.timer = setInterval(this.initTimer, 1000);
            this.isTyping = 0;
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
        this.inpField.value = "";
    }   
  }

  initTimer() {
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

