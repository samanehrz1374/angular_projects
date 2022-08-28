import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ContentChild('par',{static:true}) par:ElementRef|any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.par.nativeElement.textContent)
  }

}
