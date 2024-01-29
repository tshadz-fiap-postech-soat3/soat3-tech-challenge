export abstract class IPayment {
  public abstract update(id: string): Promise<any>;
}
