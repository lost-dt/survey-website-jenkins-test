import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  
  constructor(private router: Router, private authService: AuthenticationService) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToMain() {
    this.router.navigate(['']);
  }
}
