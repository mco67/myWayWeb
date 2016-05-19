import { Component, OnInit } from '@angular/core';
import { Route, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { TopAreaComponent } from './top-area/top-area.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { UserService } from './services/userService';


@Component({
	moduleId: module.id,
	selector: 'my-way-app',
	templateUrl: 'my-way.component.html',
	styleUrls: ['my-way.component.css'],
	directives: [ROUTER_DIRECTIVES, TopAreaComponent],
})


@Routes([
	new Route({ path: '/', component: MainPageComponent }),
	new Route({ path: '/login', component: LoginPageComponent }),
	new Route({ path: '/admin', component: AdminPageComponent })
])

export class MyWayAppComponent {

	constructor(private userService: UserService) { 
		
	}
}
