export class OrderEntity {
  id: string;
  status: OrderStatus;
  customerId: string;
  price: number;
  createdAtDate: Date;
  updatedAtDate: Date;

  constructor(id: string, customerId: string, price: number) {
    this.id = id;
    this.status = OrderStatus.PAYMENT_DUE;
    this.customerId = customerId;
    this.price = price;
    this.createdAtDate = new Date();
    this.updatedAtDate = new Date();
  }

  isPlaced(): boolean {
    this.updatedAtDate = new Date();
    return this.status === OrderStatus.PLACED;
  }

  isConfirmed(): boolean {
    this.updatedAtDate = new Date();
    return this.status === OrderStatus.CONFIRMED;
  }

  isProcessing(): boolean {
    this.updatedAtDate = new Date();
    return this.status === OrderStatus.PROCESSING;
  }

  isReady(): boolean {
    this.updatedAtDate = new Date();
    return this.status === OrderStatus.READY_TO_PICKUP;
  }

  isConcluded(): boolean {
    this.updatedAtDate = new Date();
    return this.status === OrderStatus.CONCLUDED;
  }

  isCancelled(): boolean {
    this.updatedAtDate = new Date();
    return this.status === OrderStatus.CANCELLED;
  }
}

export enum OrderStatus {
  PAYMENT_DUE = 'Aguardando Pagamento',
  PLACED = 'Pagamento realizado e aguardando confirmação',
  CONFIRMED = 'Pedido confirmado e aguardando preparo',
  PROCESSING = 'Em Preparo',
  READY_TO_PICKUP = 'Pronto para entrega',
  CONCLUDED = 'Pedido entregue e finalizado',
  CANCELLED = 'Pedido Cancelado',
}
