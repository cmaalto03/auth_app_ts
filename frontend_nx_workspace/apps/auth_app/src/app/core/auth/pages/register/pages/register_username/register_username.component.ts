import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../register.service';
@Component({
  selector: 'app-register-username',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register_username.component.html',
  styleUrl: './register_username.component.css',
})
export class RegisterUsernameComponent {
  private registerService: RegisterService = inject(RegisterService);
  private router: Router = inject(Router);

  registerUserForm = new FormGroup({
    username: new FormControl(''),
  });

  onUsernameSubmitted(): void {
    const username = this.registerUserForm.get('username')?.value;

    // TODO: I don't like this. But it works. Fix.
    if (username) this.registerService.setUsername(username);

    // TODO: Check with API that username is avaliable, then navigate (use Observable)
    this.router.navigate(['/register/password']);
  }
}
