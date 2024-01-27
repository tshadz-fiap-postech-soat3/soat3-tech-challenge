import { Inject } from '@nestjs/common';
import { IProductsRepository } from '../../ports/iproduct.repository';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from '../command/products-command';
import { ApplicationResult } from '../applicationResult/application-result';
import { ApplicationResultEvents } from '../applicationResult/application-result-events';
import { ResultStatus } from '../result/result-status';

@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(
    @Inject(IProductsRepository)
    private productsRepository: IProductsRepository,
  ) {}

  async execute(command: CreateProductCommand): Promise<ApplicationResult> {
    const product = await this.productsRepository.findByName(command.name);
    if (product) {
      return new ApplicationResult(
        ApplicationResultEvents.ERROR,
        'Product already exists',
      );
    }
    const createdProduct = await this.productsRepository.insert(command);
    if (createdProduct.status === ResultStatus.ERROR) {
      return new ApplicationResult(
        ApplicationResultEvents.ERROR,
        'Not able to create the product',
      );
    }
    return new ApplicationResult(
      ApplicationResultEvents.SUCCESS_CREATED,
      createdProduct as unknown as string,
    );
  }
}
