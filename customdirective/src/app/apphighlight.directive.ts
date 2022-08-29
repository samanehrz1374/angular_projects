import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appApphighlight]'
})
export class ApphighlightDirective {


  constructor(private elementref:ElementRef) { 
    
    
  }
  @Input() highlightColor: string|any='yellow';
  @HostListener('mouseenter') onMouseEnter(){
    // this.elementref.nativeElement.style.backgroundColor = 'yellow';
    this.changeBackgroundcolor(this.highlightColor)
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.elementref.nativeElement.style.backgroundColor = 'transparent';
    this.changeBackgroundcolor('transparent')
    
  }

  private changeBackgroundcolor(color:string){
    this.elementref.nativeElement.style.backgroundColor=color;
  }

}
