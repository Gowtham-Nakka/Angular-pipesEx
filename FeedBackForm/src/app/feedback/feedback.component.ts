import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/feedback.model';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, CommonModule]
})
export class FeedbackComponent implements OnInit {

  feedbackForm = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]),
    comments: new FormControl('', [Validators.required, Validators.maxLength(350)])
  });

  feedbackList: Feedback[] = [];
  isEditMode = false;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks() {
    this.feedbackService.getAllFeedback().subscribe(data => this.feedbackList = data);
  }

  onSubmit() {
    if (!this.feedbackForm.valid) {
      alert('Form is invalid. Fill all fields correctly.');
      return;
    }

    const rawValue = this.feedbackForm.value;
    const feedback: Feedback = {
      ...rawValue,
      id: rawValue.id === null ? undefined : rawValue.id
    } as Feedback;

    if (this.isEditMode && feedback.id) {
      this.feedbackService.updateFeedback(feedback.id, feedback).subscribe(() => {
        alert('Feedback updated successfully!');
        this.feedbackForm.reset();
        this.isEditMode = false;
        this.loadFeedbacks();
      });
    } else {
      this.feedbackService.createFeedback(feedback).subscribe(() => {
        alert('Feedback submitted successfully!');
        this.feedbackForm.reset();
        this.loadFeedbacks();
      });
    }
  }

  editFeedback(fb: Feedback) {
    this.isEditMode = true;
    this.feedbackForm.setValue({
      id: fb.id || null,
      name: fb.name,
      email: fb.email,
      subject: fb.subject,
      comments: fb.comments
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteFeedback(id: number) {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackService.deleteFeedback(id).subscribe(() => this.loadFeedbacks());
    }
  }

  cancelEdit() {
    this.feedbackForm.reset();
    this.isEditMode = false;
  }
}
