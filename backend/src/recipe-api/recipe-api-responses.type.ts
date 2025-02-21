import Meat from 'src/types/Meat.type';

export type RecipeApiResponsesSearch = {
  meals: Array<Meat>;
};

export type RecipeApiResponsesLookup = {
  meals: Array<Meat>;
};

export enum RecipeApiResponsesFilterOptions {
  'ingredient' = 'i',
  'country' = 'a',
  'category' = 'c',
}
