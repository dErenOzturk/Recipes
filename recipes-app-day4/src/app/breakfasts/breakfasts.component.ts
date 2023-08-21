import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-breakfasts',
  templateUrl: './breakfasts.component.html',
  styleUrls: ['./breakfasts.component.css'],
})
export class BreakfastsComponent {
  constructor(private recipeService: RecipeService) {}

  breakfastRecipes = this.recipeService.getBreakfastRecipes();
  allRecipes = this.recipeService.getAllRecipes();
  favoriteRecipes = this.recipeService.getFavoriteRecipes();

  recipeDetails(i: number) {
    this.recipeService.contentIndex = i;
    this.recipeService.recipeCategory = 'main-course';
  }

  deleteRecipe(recipe: any) {
    const indexBF = this.breakfastRecipes.indexOf(recipe);
    const indexAll = this.allRecipes.indexOf(recipe);

    this.allRecipes.splice(indexAll, 1);
    this.breakfastRecipes.splice(indexBF, 1);
  }

  setFavorite(recipe: any) {
    const index = this.breakfastRecipes.indexOf(recipe);
    const indexFav = this.favoriteRecipes.indexOf(recipe);

    this.breakfastRecipes[index].isFavorite =
      !this.breakfastRecipes[index].isFavorite;

    if (this.breakfastRecipes[index].isFavorite) {
      this.recipeService.addFavoriteRecipes(this.breakfastRecipes[index]);
    } else {
      this.favoriteRecipes.splice(indexFav, 1);
    }
  }
}
