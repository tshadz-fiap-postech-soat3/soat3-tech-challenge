import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from '../../category/entitites/create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
