export class Order {
    id: string
    status: OrderStatus
    created_at: Date
    updated_at: Date

    constructor(
        id: string, 
        status: string, 
        ) {
            this.id = id;
            this.status = OrderStatus.OPEN;
        }

    isClosed(): boolean {
        return this.status === OrderStatus.CLOSED;
    }
}

enum OrderStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}
