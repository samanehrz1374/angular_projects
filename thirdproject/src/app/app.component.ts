import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdproject';
  ratings: number[]=[3.5,5,2,1.5,0.5]

  public onStarClicked(raite: number){
    console.log(`the raiting ${raite} is clicked`)

  }
}
