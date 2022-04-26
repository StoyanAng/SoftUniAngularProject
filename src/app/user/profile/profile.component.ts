import { Component } from '@angular/core';
import { UserService } from '../userService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  get firstName(): string {
    return this.userService.user?.firstName || ``;
  }
  
  get email(): string {
    return this.userService.user?.email || ``;
  }

  constructor(private userService: UserService) { }

}
