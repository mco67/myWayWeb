import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/map';

@Injectable()
export class AuthService {

    private baseUrl: string;

    constructor(public http: Http) {
        this.baseUrl = 'http://localhost:8080';
    }

    public authenticate(username: string, password: string): Observable<any> {
        console.log(`[AUTH_SERVICE] authenticate ${username}`);

        // Fill headers for basic Authentication         
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
        headers.append('Accept', 'application/json');

        // Call api
        return this.http.get(`${this.baseUrl}/api/v1.0/authenticate`, { headers: headers })
            .map(res => res.json());
    }

}