import { Component } from '@angular/core';
import { IUser } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:IUser={
    name:"samaneh",
    age:27
  }

  users:IUser[]=[
    {
      name:"samaneh",
      age:27
    },
    {
      name:"samira",
      age:30
    },
    {
      name:"maryam",
      age:29
    },
    {
      name:"sahar",
      age:26
    }
  ];

  public onSelectChange(user:IUser){
    console.log(user)
  }
  title = 'directive';
}
