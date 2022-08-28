import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number=4;
  @Output() startClicked= new EventEmitter<number>();
  width: number=90;

  constructor() { }

  ngOnInit(): void {
    this.width= this.rating *90/5;
  }

  public onClick(){
    this.startClicked.emit(this.rating);
  }

}
