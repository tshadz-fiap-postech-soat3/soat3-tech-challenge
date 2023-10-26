export class Category {
    id: string
    name: string
    created_at: Date
    updated_at: Date

    constructor(
        id: string, 
        name: string, 
        ) {
            this.id = id;
            this.name = name;
        }
}
