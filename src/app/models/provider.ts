export class Provider {

    public id: string;
    public name: string;
    public description: string;

    constructor(id: string, name: string, desc: string) {
        this.id = id;
        this.name = name;
        this.description = desc;
    }
    
    toString(): string {
        return `${this.id} ${this.name}`;
    }

}