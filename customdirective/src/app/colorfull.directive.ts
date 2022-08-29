import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorfull]'
})
export class ColorfullDirective {
  availableColors = ['#BD0000','F64343','#800000','#FFFF00','#808000']; 

  @HostBinding('style.color') color:string|any;
  @HostBinding('style.border-color') borderColor:string|any;
  @HostListener('keydown') newcolor(){
    const randomColorIndex= Math.floor(Math.random() * this.availableColors.length);
    this.color = this.borderColor = this.availableColors[randomColorIndex]
  }


  constructor() { }

}
