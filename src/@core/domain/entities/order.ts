export class Order {
    id: string
    status: string
    created_at: Date
    updated_at: Date

    constructor(
        id: string, 
        status: string, 
        ) {
            this.id = id;
            this.status = status;
        }
}
