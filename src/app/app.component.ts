import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';

  // alternatively can be written as:
  // constructor() {
  //   this.password = '';
  // }

  onButtonClick(){
    this.password = 'dis my pathword';
  }
}
