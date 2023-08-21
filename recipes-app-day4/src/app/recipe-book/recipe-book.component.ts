import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {
 
  constructor(private recipeService: RecipeService){};

  favoriteRecipes = this.recipeService.getFavoriteRecipes();

  recipeDetails(i: number) {
    this.recipeService.contentIndex = i;
    this.recipeService.recipeCategory = 'favorite';
  }

  setFavorite(recipe: any) {
    const index = this.favoriteRecipes.indexOf(recipe);
    const indexFav = this.favoriteRecipes.indexOf(recipe);

    this.favoriteRecipes[index].isFavorite = !this.favoriteRecipes[index].isFavorite;

    if(this.favoriteRecipes[index].isFavorite){
      this.recipeService.addFavoriteRecipes(this.favoriteRecipes[index]);
    }
    else {
      this.favoriteRecipes.splice(indexFav, 1);
    }
  }
}
