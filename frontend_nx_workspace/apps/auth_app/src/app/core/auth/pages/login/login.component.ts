import { Component, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoginModel } from './login.model';
import { User } from '../../../user.model';

import { AuthService } from '../../auth.service';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnDestroy {
  authService: AuthService = inject(AuthService);
  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  errorMessage = signal<string | null>(null);

  private loginSubscription: Subscription | null = null;
  loginUserForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onLoginSubmit(): void {
    const loginFormObj = this.loginUserForm.value as LoginModel;

    this.loginSubscription = this.authService.login(loginFormObj).subscribe({
      next: (user: User) => {
        this.userService.set(user);
        this.router.navigateByUrl('/');
      },
      error: (error: Error) => {
        // TODO: Seperate error handling file + further CSS styling for error
        this.errorMessage.set(error.message);
      },
    });
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
}
