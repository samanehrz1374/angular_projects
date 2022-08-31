import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'formPatternValidator';
  requiredForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.myForm();
    

  }

  myForm() {
    this.requiredForm= this.fb.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    })
  }

  ngOnInit(){
    
  }





}
