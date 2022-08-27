import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databunding',
  templateUrl: './databunding.component.html',
  styleUrls: ['./databunding.component.css']
})
export class DatabundingComponent {
  username:string="Please Enter Your name";
  // is_enabled:boolean=false
  password: string='';
  confirmpassword:string="";
  IsPassMatch:boolean=false;

  public onInputChanged (e:Event){
    // console.log(e)
    this.username= "Welcome"+" "+(<HTMLInputElement>e.target).value;

  }

  public passwordCheck(e:Event){
    this.password=(<HTMLInputElement>e.target).value;


  }

  public confirmPasswordCheck(e:Event){
    this.confirmpassword=(<HTMLInputElement>e.target).value;



    // if (this.password !== this.confirmpassword) {
    //   this.IsPassMatch=false;
      
    // } else {
    //   this.IsPassMatch=true;
      
    // }

    this.IsPassMatch = this.password !== this.confirmpassword ? false :true;

  }





  

}
