import { Component, OnInit } from '@angular/core';
import { Route, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { TopAreaComponent } from './top-area/top-area.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserService } from './services/userService';


@Component({
	moduleId: module.id,
	selector: 'my-way-app',
	templateUrl: 'my-way.component.html',
	styleUrls: ['my-way.component.css'],
	directives: [ROUTER_DIRECTIVES, TopAreaComponent],
})


@Routes([
	new Route({ path: '/', component: HomePageComponent }),
	new Route({ path: '/login', component: LoginPageComponent })
])

export class MyWayAppComponent {

	constructor(private userService: UserService) { 
		
	}
}
