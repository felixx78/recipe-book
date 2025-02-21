import { IsEnum, IsString } from 'class-validator';
import { RecipeApiResponsesFilterOptions } from './recipe-api-responses.type';

export class RecipeApiFilterMeatsDto {
  @IsString()
  value: string;

  @IsEnum(RecipeApiResponsesFilterOptions)
  filterBy: RecipeApiResponsesFilterOptions;
}
