import { Component } from '@angular/core';
import { UserService } from '../services/userService';
import { User } from '../models/User';

@Component({
  moduleId: module.id,
  selector: 'app-top-area',
  templateUrl: 'top-area.component.html',
  styleUrls: ['top-area.component.css'],
})

export class TopAreaComponent {

  private user : User;
  
  constructor(private userService: UserService) {
    this.user = userService.user;
  }

}
