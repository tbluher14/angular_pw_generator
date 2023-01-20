import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  // alternatively can be written as:
  // constructor() {
  //   this.password = '';
  // }


  onButtonClick(){
    this.password = 'dis my pathword';
  }

  onChangeUseLetters(){
    // Changes the boolean to the opposite of what it is
    this.includeLetters = !this.includeLetters;
  }
}
