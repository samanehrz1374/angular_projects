import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../interfaces/app-interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:IUser|any;
  constructor( private route:ActivatedRoute, private router: Router,private userservices: UserService) { }

  ngOnInit(): void {
    this.user= this.userservices.users.find(user => user.id=== +this.route.snapshot.params['id']);

    if(!this.user){
      // console.log('a')
      this.router.navigate(['/users']);

    }
  }

  public editUser(){
    this.router.navigate(['/user',this.user.id,'edit' , {queryParams:{editMode:'1',isAdmin:'1'}, fragment:'title'}])
  }
}
