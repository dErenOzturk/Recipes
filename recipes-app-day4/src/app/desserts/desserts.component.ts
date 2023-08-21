import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css'],
})
export class DessertsComponent {
  constructor(private recipeService: RecipeService) {}

  dessertRecipes = this.recipeService.getDessertRecipes();
  allRecipes = this.recipeService.getAllRecipes();
  favoriteRecipes = this.recipeService.getFavoriteRecipes();

  recipeDetails(i: number) {
    this.recipeService.contentIndex = i;
    this.recipeService.recipeCategory = 'main-course';
  }

  deleteRecipe(recipe: any) {
    const indexDS = this.dessertRecipes.indexOf(recipe);
    const indexAll = this.allRecipes.indexOf(recipe);

    this.allRecipes.splice(indexAll, 1);
    this.dessertRecipes.splice(indexDS, 1);
  }

  setFavorite(recipe: any) {
    const index = this.dessertRecipes.indexOf(recipe);
    const indexFav = this.favoriteRecipes.indexOf(recipe);

    this.dessertRecipes[index].isFavorite = !this.dessertRecipes[index].isFavorite;

    if(this.dessertRecipes[index].isFavorite){
      this.recipeService.addFavoriteRecipes(this.dessertRecipes[index]);
    }
    else {
      this.favoriteRecipes.splice(indexFav, 1);
    }
  }
}
