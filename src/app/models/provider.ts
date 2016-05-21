export class Provider {

    public id: string;
    public name: string;
    public description: string;

    public static create(name: string, description: string, id?:string): Provider {
        let provider = new Provider();
        provider.id = id;
        provider.name = name;
        provider.description = description;
        return provider;
    }

    constructor() {
       
    }
    
    public toString(): string {
        return `${this.id} ${this.name}`;
    }

}