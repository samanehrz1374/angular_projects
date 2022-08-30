import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/app-interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[]|any;

  constructor(private userservices:UserService ) { }

  ngOnInit(): void {
    this.users=this.userservices.users;
  }


}
