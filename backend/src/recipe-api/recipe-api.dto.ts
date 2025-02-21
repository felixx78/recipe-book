import { IsString, Validate } from 'class-validator';
import { RecipeApiResponsesFilterOptions } from './recipe-api-responses.type';

export class RecipeApiFilterMeatsDto {
  @Validate((_, value) => Object.keys(RecipeApiResponsesFilterOptions).includes(value))
  filterBy: string;
}
