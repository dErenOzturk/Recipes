import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent {
  constructor(private recipeService: RecipeService, private router: Router) {}

  favoriteRecipes = this.recipeService.getFavoriteRecipes();

  recipeDetails(i: number) {
    this.recipeService.contentIndex = i;
    this.recipeService.recipeCategory = 'favorite';
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

    this.removeFavoriteRecipe(recipe);
    this.successMessage = `${recipe.title}, tarif defterinizden çıkarıldı.`;
    setTimeout(() => {
      this.successMessage = '';
    }, 1200);
  }

  redirectToAllRecipes(): void {
    this.router.navigate(['/all-recipes']);
  }
}
