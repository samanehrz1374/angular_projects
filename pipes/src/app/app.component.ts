import { Component } from '@angular/core';
import { Observable,Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  presentDate=new Date();
  title = 'pipes';

  price:number=2000;

  Fruits=["Apple","Orange","Grapes","Mango","Kiwi"];

  decimalNum1:number= 8.7589623;
  decimalNum2:number= 5.43;

  jsonData = {
    id:'one',
    name:{ username: 'user1'}
  };

  digits: number=100;
  




  timeCahnge = new Observable<string>((observer:Observer<string>)=>{
    setInterval(()=> observer.next(new Date().toString()),1000);
  })
}
