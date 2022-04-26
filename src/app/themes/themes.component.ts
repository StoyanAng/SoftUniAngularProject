import { Component } from '@angular/core';
import { UserService } from '../user/userService';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService) { }


}
