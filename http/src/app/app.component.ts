import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  httpdata:any;
  title = 'http';


  constructor(private http:HttpClient){

  }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").
    subscribe((data) => this.displaydata(data))
  }

  displaydata(data:any){
    this.httpdata = data;
  }
}
