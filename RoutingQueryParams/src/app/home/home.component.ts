import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Isloggedin:boolean=false; 

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.Isloggedin= this.authService.checkAuth();
  }

  public loginUser(){
    this.authService.loggin();
  }

  public logoutUser(){
    this.authService.loggedout();
  }

}
