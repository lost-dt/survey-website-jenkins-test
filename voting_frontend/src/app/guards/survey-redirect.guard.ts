import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class SurveyRedirectGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.userService.isPresentUser()) {
      // new user so return true
      return true;
    }
    // user that already submitted the form
    this.snackBar.open('You have already submitted!', 'OK', { duration: 7000 });
    this.router.navigate(['stats'], { queryParams: { disable: true }});
    return false;
  }
}
