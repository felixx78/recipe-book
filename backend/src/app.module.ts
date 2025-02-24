import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RecipeApiModule } from './recipe-api/recipe-api.module';

@Module({
  imports: [RecipeApiModule],
  controllers: [AppController],
})
export class AppModule {}
