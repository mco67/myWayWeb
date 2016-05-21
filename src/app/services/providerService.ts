import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ConfigService } from '../services/configService';
import { UserService } from '../services/userService';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/Rx";
import { Provider } from '../models/Provider';
import 'rxjs/operator/map';


@Injectable()

export class ProviderService {

    constructor(
        private configService: ConfigService,
        private userService: UserService,
        private http: Http) {
    }

    public getProviders() : Observable<Array<Provider>> {
       
        let headers = this.userService.getAuthenticationHeaders();
        return this.http.get(`${this.configService.baseURL}/api/v1.0/admin/providers`, { headers: headers })
            .map(res => {
                return res.json().data.map(data => {
                    return Provider.create(data['name'], data['description'], data['id']);
                });
            });
    }
    
    public createProvider(provider : Provider) {
        alert("Create provider");
    }
}