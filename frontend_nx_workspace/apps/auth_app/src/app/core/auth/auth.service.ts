import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './pages/login/login.model';
import { User } from '../user.model';
import { environment } from '../../environment';
import { RegisterModel } from './pages/register/register.model';
import { AuthUser } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient: HttpClient = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  private authUser: AuthUser | null = null;
  private userIsAuthed = false;

  public login(
    loginModel: LoginModel
  ): Observable<{ user: User; authUser: AuthUser }> {
    return this.httpClient.post<{ user: User; authUser: AuthUser }>(
      this.baseUrl + '/api/auth/login',
      {
        loginModel,
      }
    );
  }

  public register(registerModel: RegisterModel): Observable<LoginModel> {
    return this.httpClient.post<LoginModel>(
      this.baseUrl + '/api/auth/register',
      {
        registerModel,
      }
    );
  }

  public set(authUser: AuthUser) {
    this.authUser = authUser;
  }

  public getToken(): string {
    return this.authUser?.token as string;
  }
}
