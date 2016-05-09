import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../services/configService';

import 'rxjs/operator/map';

@Injectable()
export class AuthService {

    constructor(private http: Http, private configService: ConfigService) {
    }

    public authenticate(username: string, password: string): Observable<any> {
        console.log(`[AUTH_SERVICE] authenticate ${username}`);

        // Fill headers for basic Authentication         
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
        headers.append('Accept', 'application/json');

        // Call api
        return this.http.get(`${this.configService.baseURL}/api/v1.0/authenticate`, { headers: headers })
            .map(res => res.json());
    }

}