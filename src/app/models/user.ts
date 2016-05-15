export class User {

    public id: string;
    public login: string;
    public firstname: string;
    public lastname: string;

    constructor(id: string, login: string) {
        this.id = id;
        this.login = login;
    }
    
    toString(): string {
        return `${this.id} ${this.login}`;
    }

}