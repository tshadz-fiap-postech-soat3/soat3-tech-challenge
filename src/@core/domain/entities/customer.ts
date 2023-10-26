export class Customer {
    id: string
    name: string
    cpf: string
    email: string
    created_at: Date
    updated_at: Date

    constructor(
        id: string, 
        name: string, 
        cpf: string,
        email: string,
        ) {
            this.id = id;
            this.name = name;
            this.cpf = cpf;
            this.email = email
        }
}
