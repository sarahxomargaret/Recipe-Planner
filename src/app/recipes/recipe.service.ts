import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSeleteced = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg'),
        new Recipe('Another Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg'),
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}