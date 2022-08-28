import { AfterViewInit, Component,ElementRef,OnInit, ViewChild,ViewChildren,ViewEncapsulation } from '@angular/core';
import { IncComponent } from './inc/inc.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit,AfterViewInit {
  
  title = 'encapsulation';
  @ViewChild("par",{static:true,read:ElementRef}) par:ElementRef|any ;
  // @ViewChild(IncComponent,{static:true,read:IncComponent}) inccomp:Component|any;
  @ViewChildren(IncComponent,{read:IncComponent}) inccomp:Component|any;
  ngOnInit(): void {
  }
  
  public ngAfterViewInit(): void {
    console.log(this.inccomp)
    this.inccomp.increament();
    this.par.nativeElement.innerHTML="123456";
    
  }




  public onclick(val:HTMLInputElement){
    alert(val.value)

  }
}
