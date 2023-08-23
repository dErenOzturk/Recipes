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
    this.recipeService.recipeCategory = 'breakfast';
  }

  deleteRecipe(recipe: any) {
    const indexBF = this.breakfastRecipes.indexOf(recipe);
    const indexAll = this.allRecipes.indexOf(recipe);

    this.allRecipes.splice(indexAll, 1);
    this.breakfastRecipes.splice(indexBF, 1);
  }

  addFavoriteRecipe(recipe: any) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
  }

  removeFavoriteRecipe(recipe: any) {
    const index = this.favoriteRecipes.indexOf(recipe);
    if (index !== -1) {
      this.favoriteRecipes.splice(index, 1);
    }
  }

  successMessage: string = '';

  setFavorite(recipe: any) {
    recipe.isFavorite = !recipe.isFavorite;

    if (recipe.isFavorite) {
      this.addFavoriteRecipe(recipe);
      this.successMessage = `${recipe.title}, tarif defterinize eklendi.`;
      setTimeout(() => {
        this.successMessage = '';
      }, 1200);
    } else {
      this.removeFavoriteRecipe(recipe);
      this.successMessage = `${recipe.title}, tarif defterinizden çıkarıldı.`;
      setTimeout(() => {
        this.successMessage = '';
      }, 1200);
    }
  }

  warningActive = false;
  warningIndex: number;

  openWarning(index: number) {
    this.warningIndex = index;
    this.warningActive = true;
    console.log(index);
  }

  closeWarning() {
    this.warningActive = false;
  }
}
