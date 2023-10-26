export class Product {
    id: string
    name: string
    description: string
    category_id: string
    price: number
    created_at: Date
    updated_at: Date

    constructor(
        id: string, 
        name: string, 
        description: string,
        category_id: string,
        price: number
        ) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category_id = category_id;
            this.price = price
        }
}
