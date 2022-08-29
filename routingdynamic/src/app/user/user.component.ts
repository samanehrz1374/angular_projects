import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IUser } from '../interfaces/app-interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selectedId: number|any;
  selectedUser: IUser|any;
  IsUserFound:boolean=true;


  users: IUser[]=[
    {
      id:1,
      name:'samaneh'
    },
    {
      id:2,
      name:'samira'
    },
    {
      id:3,
      name:'maryam'
    },
    {
      id:4,
      name:'sahar'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedId= +this.route.snapshot.params['id'];
    this.selectedUser=this.users.find(user => user.id ===this.selectedId)
    if (!this.selectedUser){
      this.IsUserFound=false;

    }

    this.route.params.subscribe((params:Params)=>{
      this.selectedUser=this.users.find(user => user.id ===+params['id'])


    });


  }


}
