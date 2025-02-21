import Meat from 'src/types/Meat.type';

export type RecipeApiResponsesSearch = {
  meals: Array<Meat>;
};

export type RecipeApiResponsesLookup = {
  meals: Array<Meat>;
};

export type RecipeApiResponsesFilterOptions = 'ingredient' | 'country' | 'category';
