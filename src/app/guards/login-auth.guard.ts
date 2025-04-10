import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);         
  const token = localStorage.getItem('token');

  if (!token || token.trim() === '') {
    router.navigate(['/authentication/login']);
    return false; // Block access
  }
  return true;
};
