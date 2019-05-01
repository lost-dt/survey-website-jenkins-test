import { Component, OnInit } from '@angular/core';

import { Admin } from '../shared/admin.model';
import { AdminUserService } from '../services/admin-user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  private username = '';
  private password = '';
  private admins: Admin[] = [];

  constructor(private adminService: AdminUserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.adminService.getAdminsByUsername(this.username).subscribe(adminData => {
      this.admins = adminData;
      if (!this.admins) {

      }
    });
  }

}
