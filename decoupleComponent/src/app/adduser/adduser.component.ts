import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from '../app-interface';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users: user[]=[
    {
      email:"sa@gmail.com",
      password:"123"
    },
    {
      email:"sb@gmail.com",
      password:"321"
    },
    {
      email:"sc@gmail.com",
      password:"456"
    }
  ];
  
  @Output() onAddUserClicked= new EventEmitter<user[]>();
  constructor() { }

  ngOnInit(): void {
    
  }

  public addUser(email:string,password:string,e:Event){
    e.preventDefault();
    let u:user={
      email:email,
      password:password
    }
    this.users.push(u)
    this.onAddUserClicked.emit(this.users);

  }


}
