import { Injectable } from '@angular/core';
import { User } from './home/home.page';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null;
  
  constructor() { }

  setUser(user: User): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  getUser(): User | null {
    if (!this.user) {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      }
    }
    return this.user;
  }

  clearUser(): void {
    this.user = null;
    localStorage.removeItem('user');
  }

}
