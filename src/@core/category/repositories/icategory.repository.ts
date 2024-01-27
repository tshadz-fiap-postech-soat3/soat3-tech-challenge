import { CreateCategoryDto } from '../entitites/create-category.dto';
import { UpdateCategoryDto } from '../../products/entities/update-category.dto';
import { CategoryEntity } from '../entitites/category';

export abstract class ICategoriesRepository {
  public abstract insert(category: CreateCategoryDto): Promise<void>;
  public abstract update(
    id: string,
    category: UpdateCategoryDto,
  ): Promise<void>;
  public abstract findById(id: string): Promise<CategoryEntity>;
  public abstract findAll(): Promise<CategoryEntity[]>;
  public abstract delete(id: string): Promise<void>;
}
