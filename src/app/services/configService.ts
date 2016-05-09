import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    public baseURL: string; 

    constructor() {
        this.baseURL = 'http://localhost:8080';
    }
}