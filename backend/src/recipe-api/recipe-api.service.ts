import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { RecipeApiResponsesFilterOptions, RecipeApiResponsesLookup, RecipeApiResponsesSearch } from './recipe-api-responses.type';

@Injectable()
export class RecipeApiService {
  private readonly BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private readonly httpService: HttpService) {}

  async searchMeals(s: string) {
    const response = await firstValueFrom(this.httpService.get<RecipeApiResponsesSearch>(this.BASE_URL + '/search.php?s=' + s));
    return response.data.meals;
  }

  async filterMeals(filterKey: keyof typeof RecipeApiResponsesFilterOptions) {
    const response = await firstValueFrom(
      this.httpService.get<RecipeApiResponsesSearch>(this.BASE_URL + '/filter.php?' + RecipeApiResponsesFilterOptions[filterKey]),
    );
    return response.data.meals;
  }

  async getMeatById(id: string) {
    const response = await firstValueFrom(this.httpService.get<RecipeApiResponsesLookup>(this.BASE_URL + '/lookup.php?i=' + id));
    return response.data.meals;
  }
}
