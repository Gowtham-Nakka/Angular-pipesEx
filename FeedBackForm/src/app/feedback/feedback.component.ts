import { Component } from '@angular/core'; 
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from 
'@angular/forms'; 
import { MaterialModule } from '../material.module'; 
import { CommonModule } from '@angular/common'; 
@Component({ 
selector: 'app-feedback', 
imports: [ReactiveFormsModule, MaterialModule, CommonModule], 
templateUrl: './feedback.component.html', 
styleUrl: './feedback.component.css' 
}) 
export class FeedbackComponent { 
feedback = new FormGroup({ 
name: new FormControl('', [Validators.required, Validators.minLength(5), 
Validators.maxLength(30)]), 
email: new FormControl('', [Validators.required, Validators.email]), 
    subject: new FormControl('', [Validators.required,Validators.minLength(5) 
,Validators.maxLength(40)]), 
    issue: new FormControl('', [Validators.required ,Validators.maxLength(350)]) 
  }) 
 
 
  onSubmit() { 
    if (this.feedback.valid) { 
      console.log(this.feedback.value); 
      console.log("Thank you message, we wiil get back to you shortly!"); 
      alert("Thank you message, we wiil get back to you shortly!"); 
    } else { 
      console.log("form is invalid"); 
      alert("form is invalid"); 
    } 
  } 
 
}