import { Component } from '@angular/core';
import { MdInput } from '@angular2-material/input';
import { FormBuilder, Control, ControlGroup, Validators, Validator } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/authService';

@Component({
	moduleId: module.id,
	selector: 'app-login-page',
	templateUrl: 'login-page.component.html',
	styleUrls: ['login-page.component.css'],
	providers: [AuthService]
})

export class LoginPageComponent {

	private userForm: ControlGroup;
	private username: Control;
	private password: Control;
	private usernameErrorMessage: string;
	private passwordErrorMessage: string;

	constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

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
		this.authService.authenticate(this.username.value, this.password.value)
			.subscribe(
				(data) => {
					let token = data.token;
					localStorage.setItem("token", data.token);
					 this.router.navigate(['/']);
				},
				(err) => {
					let message = err.json().message;
					if (message === "wrongUser") { this.usernameErrorMessage = "Unknow user"; }
					if (message === "wrongPassword") { this.passwordErrorMessage = "Invalid password"; }
				}
            );
	}
}

