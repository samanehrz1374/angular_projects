import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

  requiredForm: FormGroup;
   constructor(private fb: FormBuilder) {
      this.myForm();
   }

   //Create required field validator for name
   myForm() {
      this.requiredForm = this.fb.group({
      name: ['', Validators.required ]
      });
   }
   ngOnInit()
   {

   }

}
