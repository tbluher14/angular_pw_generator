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

  onButtonClick(){
    this.password = 'dis my pathword';
    console.log(this.includeLetters)
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
