import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/Rx";
import { ConfigService } from '../services/configService';
import { User } from '../models/user';
import 'rxjs/operator/map';


@Injectable()
export class UserService {

    public token: string;

    private _user: BehaviorSubject<User> = new BehaviorSubject(null);
    public user: Observable<User> = this._user.asObservable();

    constructor(
        private configService: ConfigService,
        private http: Http) {
        this.initialize();
    }

    private initialize(): void {
        console.log(`[USER_SERVICE] initialize`);

        // Case 1 : No authentication token
        this.token = localStorage.getItem('token');
        if (!this.token) {
            let errorMessage = 'initialize : Authentication token not found';
            console.warn(`[USER_SERVICE] ${errorMessage}`);
        }

        // Case 2 : Try to authenticate
        else {
            // Fill headers for basic Authentication         
            var headers = new Headers();
            headers.append('Authorization', 'Bearer ' + this.token);
            headers.append('Accept', 'application/json');

            // Call Rest WebService
            this.http.get(`${this.configService.baseURL}/api/v1.0/user/user`, { headers: headers }).map(res => res.json())
                .subscribe(
                result => {
                    let user = new User(result.data._id, result.data.login);
                    this._user.next(user);
                },
                err => {
                    console.warn(`[USER_SERVICE] initialize failure : ${err}`);
                });
        }
    }


    /******************************************************/
    /** PUBLIC METHODS                                   **/
    /******************************************************/
    public login(username: string, password: string): Observable<User> {
        console.log(`[AUTH_SERVICE] login ${username}`);

        return Observable.create(observer => {

            // Fill headers for basic Authentication         
            let headers = new Headers();
            headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
            headers.append('Accept', 'application/json');

            // Call api
            this.http.get(`${this.configService.baseURL}/api/v1.0/authenticate`, { headers: headers })
                .map(res => res.json())
                .subscribe(
                data => {
                    this.token = data.token;
                    localStorage.setItem("token", data.token);
                    let user = new User(data.user._id, data.user.login);
                    observer.next(user);
                    this._user.next(user);
                },
                err => {
                    let errorMessage = err.json().message;
                    console.warn(`[USER_SERVICE] login failure : ${errorMessage}`);
                    observer.error(errorMessage);
                });
        });
    }
    
    public logout() : void {
        if (!this.user) {
            console.error(`[AUTH_SERVICE] logout failure : not already logged`);
            return;
        } 
        
        console.log(`[AUTH_SERVICE] logout ${this.user}`);
        this._user.next(null);
        localStorage.removeItem("token");
    }

}