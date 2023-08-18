import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent {
  constructor(private recipeService: RecipeService) {}

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // allRecipes = this.recipeService.getAllRecipes().sort(() => Math.random() - 0.5);

  allRecipes = this.shuffleArray(this.recipeService.getAllRecipes());

  recipeDetails(i: number) {
    this.recipeService.contentIndex = i;
    this.recipeService.recipeCategory = 'all-recipes';
  }

  deleteRecipe(recipe: any) {
    const index = this.allRecipes.indexOf(recipe);
    if (index !== -1) {
      this.allRecipes.splice(index, 1);
    }
  }

  
}
