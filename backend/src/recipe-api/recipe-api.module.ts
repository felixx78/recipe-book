import { Module } from '@nestjs/common';
import { RecipeApiService } from './recipe-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [RecipeApiService],
  exports: [RecipeApiService],
})
export class RecipeApiModule {}
