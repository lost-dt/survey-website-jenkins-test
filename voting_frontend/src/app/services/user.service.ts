import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({providedIn: 'root'})
export class UserService {

  public initUser(): void {
    if (!this.isPresentUser()) {
      const id = this.generateUserId();
      LocalStorageService.setUserId(id);
    }
  }

  public isPresentUser(): boolean {
    return !!LocalStorageService.getUserId();
  }

  private generateUserId(): number {
    return Math.floor(100000000 + Math.random() * 900000000);
  }
}
