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

  timeCahnge = new Observable<string>((observer:Observer<string>)=>{
    setInterval(()=> observer.next(new Date().toString()),1000);
  })
}
