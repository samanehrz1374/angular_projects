import { Injectable } from '@angular/core';
import { IUser } from './interfaces/app-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users:IUser[]=[
    {id:1,name:"samaneh",email:"samaneh@gmail.com"},
    {id:1,name:"samira",email:"samira@gmail.com"},
    {id:1,name:"maryam",email:"maryam@gmail.com"},

  ]

  constructor() { }
}
