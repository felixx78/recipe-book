import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { RecipeApiResponsesFilterOptions, RecipeApiResponsesLookup, RecipeApiResponsesSearch } from './recipe-api-responses.type';

@Injectable()
export class RecipeApiService {
  private readonly BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private readonly httpService: HttpService) {}

  async searchMeats(s: string) {
    const response = await firstValueFrom(this.httpService.get<RecipeApiResponsesSearch>(this.BASE_URL + '/search.php?s=' + s));
    return response.data.meals;
  }

  async filter(value: string, filterKey: RecipeApiResponsesFilterOptions) {
    const response = await firstValueFrom(
      this.httpService.get<RecipeApiResponsesSearch>(this.BASE_URL + '/filter.php?' + filterKey === 'country' ? 'a' : filterKey[0] + '=' + value),
    );
    return response.data.meals;
  }

  async getMeatById(id: string) {
    const response = await firstValueFrom(this.httpService.get<RecipeApiResponsesLookup>(this.BASE_URL + '/lookup.php?i=' + id));
    return response.data.meals;
  }
}
