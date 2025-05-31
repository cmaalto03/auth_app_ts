import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './pages/login/login.model';
import { User } from '../user.model';
import { environment } from '../../environment';
import { RegisterModel } from './pages/register/register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient: HttpClient = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  private userIsAuthed = false;

  public login(loginModel: LoginModel): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/api/login', {
      loginModel,
    });
  }

  public register(registerModel: RegisterModel): Observable<LoginModel> {
    return this.httpClient.post<LoginModel>(this.baseUrl + '/api/register', {
      registerModel,
    });
  }
}
