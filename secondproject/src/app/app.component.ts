import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCorrect:boolean=true;
  title = 'secondproject';
  style={};

  ngOnInit(): void{
    this.style={
      'font-size':this.isCorrect ? '2rem': '8rem',
      'color':'red',

    }
  }



}
