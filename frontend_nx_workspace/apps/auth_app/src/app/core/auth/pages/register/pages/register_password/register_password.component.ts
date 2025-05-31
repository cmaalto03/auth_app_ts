import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription, switchMap } from 'rxjs';

import { RegisterService } from '../../register.service';
import { UserService } from '../../../../../user.service';
import { AuthService } from '../../../../auth.service';
import { LoginModel } from '../../../login/login.model';
import { User } from '../../../../../user.model';

@Component({
  selector: 'app-register-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register_password.component.html',
  styleUrl: './register_password.component.css',
})
export class RegisterPasswordComponent implements OnDestroy {
  private registerService: RegisterService = inject(RegisterService);
  private authService: AuthService = inject(AuthService);
  private userService: UserService = inject(UserService);

  private router: Router = inject(Router);

  registerPasswordForm = new FormGroup({
    password: new FormControl(''),
  });

  private registerFlowSubscription: Subscription | null = null;

  public readonly username = this.registerService.getUsername();

  private registerFlowChain(): void {
    const registerModel = this.registerService.getModel();

    this.registerFlowSubscription = this.authService
      .register(registerModel)
      .pipe(
        switchMap((loginModel: LoginModel) =>
          this.authService.login(loginModel)
        )
      )
      .subscribe({
        next: (user: User) => {
          this.userService.set(user);
          this.router.navigate(['/']);
        },
        error: (error: Error) => {
          console.log(error);
        },
      });
  }
  public onPasswordSubmitted(): void {
    const password = this.registerPasswordForm.get('password')?.value;

    if (password) this.registerService.setPassword(password);

    this.registerFlowChain();
  }

  ngOnDestroy(): void {
    this.registerFlowSubscription?.unsubscribe();
  }
}
