import { Route } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { RegisterUsernameComponent } from './core/auth/pages/register/pages/register_username/register_username.component';
import { RegisterPasswordComponent } from './core/auth/pages/register/pages/register_password/register_password.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'register',
    children: [
      {
        path: 'username',
        component: RegisterUsernameComponent,
      },
      {
        path: 'password',
        component: RegisterPasswordComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];
