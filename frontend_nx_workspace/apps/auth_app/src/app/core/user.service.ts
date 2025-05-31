import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: User | null = null;

  public set(user: User): void {
    this.user = user;
  }
}
