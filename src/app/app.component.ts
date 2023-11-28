import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	s: string = "Hello2";

  title = 'Angular';
  
  constructor() {
    console.log(this.s)            
  }            
}
