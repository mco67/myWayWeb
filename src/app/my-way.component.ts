import { Component } from '@angular/core';
import { Route, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfigService } from './services/configService';

@Component({
  moduleId: module.id,
  selector: 'my-way-app',
  templateUrl: 'my-way.component.html',
  styleUrls: ['my-way.component.css'],
  directives: [ROUTER_DIRECTIVES],
})


@Routes([
    new Route({path: '/', component: HomePageComponent}),
    new Route({path: '/login', component: LoginPageComponent})
  ])

export class MyWayAppComponent {
  
  title : string;
  
  constructor(configService : ConfigService) {
   this.title = 'my-way works! '+configService.baseURL;
  }
  
}
