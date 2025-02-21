import Meal from 'src/types/Meal.type';

export type RecipeApiResponsesSearch = {
  meals: Array<Meal>;
};

export type RecipeApiResponsesLookup = {
  meals: Array<Meal>;
};

export enum RecipeApiResponsesFilterOptions {
  i = 'ingredient',
  a = 'country',
  b = 'category',
}
