import { Injectable } from '@angular/core';
import { RegisterModel } from './register.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerModel: RegisterModel = {
    requested_username: '',
    requested_password: '',
  };

  public setUsername(username: string): void {
    this.registerModel.requested_username = username;
  }

  public getUsername(): string {
    return this.registerModel.requested_username;
  }

  public setPassword(password: string): void {
    this.registerModel.requested_password = password;
  }

  public getModel(): RegisterModel {
    return this.registerModel;
  }
}
