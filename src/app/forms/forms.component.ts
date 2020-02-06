import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.myForm = this.fb.group({
    login: ['login'],
    pass: ['pass']
   });
   }

onSubmit(){
 alert('You form submitted!');
}

}
