import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, Renderer, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { ANGULAR2_GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MdCard } from '@angular2-material/card';

import { ConfigService } from './app/services/configService';
import { UserService } from './app/services/userService';
import { UploadService } from './app/services/uploadService';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MyWayAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MyWayAppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  Renderer,
  provide(PLATFORM_DIRECTIVES, { useValue: ROUTER_DIRECTIVES, multi: true }),
  provide(PLATFORM_DIRECTIVES, { useValue: MD_SIDENAV_DIRECTIVES, multi: true }),
  provide(PLATFORM_DIRECTIVES, { useValue: MdToolbar, multi: true }),
  provide(PLATFORM_DIRECTIVES, { useValue: MdButton, multi: true }),
  provide(PLATFORM_DIRECTIVES, { useValue: MdInput, multi: true }),
  provide(PLATFORM_DIRECTIVES, { useValue: MdCard, multi: true }),

  ConfigService,
  UserService,
  UploadService

]);
