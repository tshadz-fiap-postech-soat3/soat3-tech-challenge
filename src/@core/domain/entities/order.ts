export class OrderEntity {
    id: string
    status?: OrderStatus
    customerId: string
    price: number

    constructor(
        id: string,
        customerId: string,
        price: number
        ) {
            this.id = id;
            this.status = OrderStatus.PAYMENT_DUE;
            this.customerId = customerId;
            this.price = price
        }

    isPlaced(): boolean {
        return this.status === OrderStatus.PLACED;
    }

    isConfirmed(): boolean {
        return this.status === OrderStatus.CONFIRMED;
    }

    isProcessing(): boolean {
        return this.status === OrderStatus.PROCESSING;
    }

    isReady(): boolean {
        return this.status === OrderStatus.READY_TO_PICKUP;
    }

    isConcluded(): boolean {
        return this.status === OrderStatus.CONCLUDED;
    }

    isCancelled(): boolean {
        return this.status === OrderStatus.CANCELLED;
    }
}

enum OrderStatus {
  PAYMENT_DUE = 'Aguardando Pagamento',
  PLACED = 'Pagamento realizado e aguardando confirmação',
  CONFIRMED = "Pedido confirmado e aguardando preparo",
  PROCESSING = 'Em Preparo',
  READY_TO_PICKUP = "Pronto para entrega",
  CONCLUDED = 'Pedido entregue e finalizado',
  CANCELLED = 'Pedido Cancelado'
}
