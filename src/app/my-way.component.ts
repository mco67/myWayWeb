import { Component } from '@angular/core';
import { Route, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  moduleId: module.id,
  selector: 'my-way-app',
  templateUrl: 'my-way.component.html',
  styleUrls: ['my-way.component.css'],
  directives: [ROUTER_DIRECTIVES]
})


@Routes([
    new Route({path: '/', component: LoginPageComponent}),
    new Route({path: '/login', component: LoginPageComponent})
  ])

export class MyWayAppComponent {
  title = 'my-way works!';
}
