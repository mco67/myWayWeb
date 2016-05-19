import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ConfigService } from '../services/configService';
import { UserService } from '../services/userService';
import 'rxjs/operator/map';


@Injectable()
export class ProviderService {

    constructor(
        private configService: ConfigService,
        private userService: UserService,
        private http: Http) {
    }

    public getProviders() {
        let headers = this.userService.getAuthenticationHeaders();
        this.http.get(`${this.configService.baseURL}/api/v1.0/admin/providers`, { headers: headers }).map(res => res.json())
            .subscribe(
            result => {
                console.log(result);
            },
            err => {
                console.warn(`[PROVIDER_SERVICE] initialize failure : ${err}`);
            });
    }
}