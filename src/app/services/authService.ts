import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { ConfigService } from '../services/configService';

import 'rxjs/operator/map';

@Injectable()
export class AuthService {
    
    private token: string;

    constructor(private http: Http, private configService: ConfigService) {
        // Read authentication token in localStorage
        this.token = localStorage.getItem('token');
    }  

    public authenticate(username: string, password: string): Observable<any> {
        console.log(`[AUTH_SERVICE] authenticate ${username}`);

        // Fill headers for basic Authentication         
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
        headers.append('Accept', 'application/json');

        // Call api
        return this.http.get(`${this.configService.baseURL}/api/v1.0/authenticate`, { headers: headers }).map(res => res.json());
    }
      
    public getAuthToken(): string  {
        return this.token; 
    } 
}

