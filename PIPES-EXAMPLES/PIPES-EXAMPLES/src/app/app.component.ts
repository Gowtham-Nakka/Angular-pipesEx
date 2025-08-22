import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultipleOf5Pipe } from './multiple-of5.pipe';
import { Form, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,MultipleOf5Pipe,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PIPES-EXAMPLES';

  name:string = 'ANgular Pipes EXamples';
  num:number = 12345;
  percentage:number = 89;
  person1= {
    name: 'John Doe',
    age: 30,
  }
  dob=new Date();


  onSubmit(f: NgForm) {
    console.log(f.value)
  }


  myFormReact!: FormGroup

  ngOnInit() {
      this.myFormReact = new FormGroup({
        username: new FormControl('',[Validators.required, Validators.minLength(3)]),
        useremail: new FormControl('',[Validators.required, Validators.email]),
        userage: new FormControl('',[Validators.required, Validators.min(19), Validators.max(65)]),
      });
    }

  onSubmitReact() {
    if(this.myFormReact.valid) {
      console.log(this.myFormReact.value);
    } 
    else {
      console.log('Form is invalid');
    }
  }
}
