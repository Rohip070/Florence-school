import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-student-reg',
  imports: [],
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.css']
})
export class StudentRegComponent {
  studentForm: FormGroup;
  uploadProgress: number = 40; // Default value for progress bar

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      studentPhoneNumber: ['', Validators.required],
      guardianEmail: ['', [Validators.required, Validators.email]],
      guardianPhoneNumber: ['', Validators.required],
      residentialAddress: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      studentPhoto: [''],
      notes: ['']
    });
  }

  saveChanges() {
    if (this.studentForm.valid) {
      console.log('Form submitted:', this.studentForm.value);
      // Additional logic to save student data
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.studentForm.controls).forEach(key => {
        this.studentForm.get(key)?.markAsTouched();
      });
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Handle file upload logic here
      console.log('File selected:', file.name);
      this.simulateUpload();
    }
  }

  simulateUpload() {
    // Simulate upload progress
    this.uploadProgress = 0;
    const interval = setInterval(() => {
      this.uploadProgress += 10;
      if (this.uploadProgress >= 40) {
        clearInterval(interval);
      }
    }, 300);
  }
}