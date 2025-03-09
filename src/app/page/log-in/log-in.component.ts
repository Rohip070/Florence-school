import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Handle login logic here
    console.log('Login attempted with:', this.email);
  }
}
