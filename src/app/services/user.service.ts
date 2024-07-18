import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: number | undefined;
  private email: string | undefined;

  constructor() {}

  setUserId(userId: number) {
    this.userId = userId;
  }

  getUserId(): number | undefined {
    return this.userId;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getEmail(): string | undefined {
    return this.email;
  }

  clearUser() {
    this.userId = undefined;
    this.email = undefined;
    localStorage.removeItem('email');
  }
}
