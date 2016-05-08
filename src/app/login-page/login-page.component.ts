import { Component, OnInit } from '@angular/core';
import { MdInput } from '@angular2-material/input';
import { FormBuilder, Control, ControlGroup, Validators, Validator } from '@angular/common';
import { AuthService } from '../services/authService';

@Component({
	moduleId: module.id,
	selector: 'app-login-page',
	templateUrl: 'login-page.component.html',
	styleUrls: ['login-page.component.css'],
	directives: [MdInput],
	providers: [AuthService]
})

export class LoginPageComponent implements OnInit {

	private userForm: ControlGroup;
	private username: Control;
	private password: Control;
	private usernameErrorMessage: string;
	private passwordErrorMessage: string;

	constructor(private fb: FormBuilder, private authService: AuthService) {

		// Create the form controls
		this.username = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));
		this.username.valueChanges.subscribe((newValue) => { this.usernameErrorMessage = ''; });

		this.password = fb.control('', Validators.compose([Validators.required]));
		this.password.valueChanges.subscribe((newValue) => { this.passwordErrorMessage = ''; });

		this.userForm = fb.group({
			username: this.username,
			password: this.password
		});      
	}

	public authenticate(): void {
		this.authService.authenticate(this.username.value, this.password.value)
			.subscribe(
				(data) => console.log("adta " + data),
				(err) => {
					let message = err.json().message;
					if (message === "wrongUser") { this.usernameErrorMessage = "Unknow user"; }
					if (message === "wrongPassword") { this.passwordErrorMessage = "Invalid password"; }
				}
            );
	}
	
	

	ngOnInit() {
	}

}

