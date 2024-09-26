import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('user'); // Verifica si hay un usuario en el almacenamiento local
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}