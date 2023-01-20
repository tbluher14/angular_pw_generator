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
    this.password = 'dis my pathword';
  }

  onChangeLength(value: string){
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
