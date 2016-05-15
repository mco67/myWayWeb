import { Component } from '@angular/core';
import { MdInput } from '@angular2-material/input';
import { FormBuilder, Control, ControlGroup, Validators, Validator } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/userService';
import { Subscription } from 'rxjs/Subscription';

@Component({
	moduleId: module.id,
	selector: 'app-login-page',
	templateUrl: 'login-page.component.html',
	styleUrls: ['login-page.component.css'],
})

export class LoginPageComponent  {

	private userForm: ControlGroup;
	private username: Control;
	private password: Control;
	private usernameErrorMessage: string;
	private passwordErrorMessage: string;
	private subscription: Subscription;

	constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

		// Create the username form control
		this.username = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));
		this.username.valueChanges.subscribe((newValue) => { this.usernameErrorMessage = ''; });

		// Create the password form control
		this.password = fb.control('', Validators.compose([Validators.required]));
		this.password.valueChanges.subscribe((newValue) => { this.passwordErrorMessage = ''; });

		// Create the group
		this.userForm = fb.group({ username: this.username, password: this.password });
	}


	public authenticate(): void { 
		this.userService.login(this.username.value, this.password.value)
		.subscribe(
			(user) => { this.router.navigate(['/']); },
			(err) => {
				if (err === "wrongUser") { this.usernameErrorMessage = "Unknow user"; }
				if (err === "wrongPassword") { this.passwordErrorMessage = "Invalid password"; }
			});
	}
}

