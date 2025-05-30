import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginUserForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(): void {
    console.log(this.loginUserForm.value.username);
    console.log(this.loginUserForm.value.password);
  }
}
