import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:string[]=["samaneh","samira"];
  switchProperty:string="a";

  users:any=[
    {
      id:1,
      name1:"samaneh"
    },
    {
      id:2,
      name1:"samira"
    }
  ]
  title = 'secondproject';

  public addUser(){
    this.users=[
      {
        id:1,
        name1:"samaneh"
      },
      {
        id:2,
        name1:"samira"
      },
      {
        id:3,
        name1:"maryam"
      },
      {
        id:4,
        name1:"sahar"
      }
    ]

  }

  public trackByFunc(index:number,el:any){
    return el.id;
  }
}
