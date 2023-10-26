import { CreateCategoryDto } from "src/@core/domain/dto/create-category.dto";
import { UpdateCategoryDto } from "src/@core/domain/dto/update-category.dto";
import { Category } from "../../../../src/@core/domain/entities/category";

export abstract class ICategoriesRepository {
    public abstract insert(category: CreateCategoryDto): Promise<void>;
    public abstract update(category: UpdateCategoryDto): Promise<void>;
    public abstract findById(id: string): Promise<Category>;
    public abstract delete(id: string): Promise<void>;
}