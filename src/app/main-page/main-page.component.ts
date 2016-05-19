import { Component } from '@angular/core';
import { UserService } from '../services/userService';
import { User } from '../models/User';

@Component({
	moduleId: module.id,
	selector: 'app-main-page',
	templateUrl: 'main-page.component.html',
	styleUrls: ['main-page.component.css']
})
export class MainPageComponent {

	private user: User;

	constructor(private userService: UserService) {
		this.userService.user.subscribe(user => this.user = user);
	}

}
