import { Component, OnInit } from '@angular/core';
import { loggingService } from '../logging.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers:[loggingService],
})
export class HomeComponent implements OnInit {

  constructor(private loggingService:loggingService) { }

  ngOnInit(): void {
  }



  public log(){
    console.log(this.loggingService.title)
    this.loggingService.log("log from home component")
  }

  public onChange(event:Event){
    this.loggingService.title = (event.target as HTMLInputElement).value;

  }

}
