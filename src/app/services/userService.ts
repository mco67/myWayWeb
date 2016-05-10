import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../services/configService';
import { AuthService } from '../services/authService'; 
 
import { User } from '../models/user';

import 'rxjs/operator/map';

@Injectable()
export class UserService {

    constructor(
        private configService: ConfigService, 
        private authService: AuthService, 
        private http: Http) {}
    
    public getOwnUser(): Observable<any> {
        console.log(`[USER_SERVICE] getOwnUser`);  
        
        // Fill headers for basic Authentication         
        let headers = new Headers();
        headers.append('Authorization', 'Bearer '+this.authService.getAuthToken());
        headers.append('Accept', 'application/json');
      
        return this.http.get(`${this.configService.baseURL}/api/v1.0/user/user`, { headers: headers }).map(res => res.json());    
    }
}