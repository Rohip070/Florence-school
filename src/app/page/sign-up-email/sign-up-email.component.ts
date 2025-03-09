import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-email',
  templateUrl: './sign-up-email.component.html',
  styleUrl: './sign-up-email.component.css'
})
export class SignUpEmailComponent{

  constructor(
    private router: Router
  ) {

  }

  createAccount() {
    console.log('ola')
    this.router.navigate(['verification']);
  }
}
