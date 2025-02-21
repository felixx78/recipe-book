import { Controller, Get, NotFoundException, Param, Query, ValidationPipe } from '@nestjs/common';
import { RecipeApiService } from './recipe-api/recipe-api.service';
import { RecipeApiFilterMeatsDto } from './recipe-api/recipe-api.dto';

@Controller()
export class AppController {
  constructor(private readonly repiceApiService: RecipeApiService) {}

  @Get('search')
  async searchMeals(@Query('s') s: string) {
    return this.repiceApiService.searchMeals(s);
  }

  @Get('filter')
  filterMeals(@Query(new ValidationPipe()) query: RecipeApiFilterMeatsDto) {
    return this.repiceApiService.filterMeals(query.value, query.filterBy);
  }

  @Get(':id')
  async getMealById(@Param('id') id: string) {
    const meal = await this.repiceApiService.getMeatById(id);
    if (!meal) throw new NotFoundException();
    return meal;
  }
}
