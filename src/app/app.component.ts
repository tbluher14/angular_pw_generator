import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // alternatively can be written as:
  // constructor() {
  //   this.password = '';
  // }
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0

  onButtonClick(){
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwyz'
    const symbols = '!@#$%^&*()'

    let validChars = ''
    if (this.includeLetters){
      validChars += letters
    }
    if (this.includeNumbers){
      validChars+= numbers
    }
    if (this.includeSymbols){
      validChars+= symbols
    }

    let generatedPassword = ''
    for (let i = 0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }

  }

  onChangeLength(target: EventTarget){
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseInt(value)
    if (!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    // Changes the boolean to the opposite of what it is
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
}
