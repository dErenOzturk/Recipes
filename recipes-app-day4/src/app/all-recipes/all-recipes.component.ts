import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
})
export class AllRecipesComponent {
  constructor(private recipeService: RecipeService) {}

  favoriteRecipes = this.recipeService.getFavoriteRecipes();
  allRecipes = this.shuffleArray(this.recipeService.getAllRecipes());
  breakfastRecipes = this.recipeService.getBreakfastRecipes();
  mainCourseRecipes = this.recipeService.getMainCourseRecipes();
  dessertRecipes = this.recipeService.getDessertRecipes();

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  recipeDetails(i: number) {
    this.recipeService.contentIndex = i;
    this.recipeService.recipeCategory = 'all-recipes';
  }

  deleteRecipe(recipe: any) {
    const indexAll = this.allRecipes.indexOf(recipe);

    if (this.breakfastRecipes.includes(recipe)) {
      this.breakfastRecipes.splice(this.breakfastRecipes.indexOf(recipe), 1);
    } else if (this.mainCourseRecipes.includes(recipe)) {
      this.mainCourseRecipes.splice(this.mainCourseRecipes.indexOf(recipe), 1);
    } else if (this.dessertRecipes.includes(recipe)) {
      this.dessertRecipes.splice(this.dessertRecipes.indexOf(recipe), 1);
    }

    this.allRecipes.splice(indexAll, 1);

  }

  setFavorite(recipe: any) {
    const index = this.allRecipes.indexOf(recipe);
    const indexFav = this.favoriteRecipes.indexOf(recipe);

    this.allRecipes[index].isFavorite = !this.allRecipes[index].isFavorite;

    if(this.allRecipes[index].isFavorite){
      this.recipeService.addFavoriteRecipes(this.allRecipes[index]);
    }
    else {
      this.favoriteRecipes.splice(indexFav, 1);
    }
  }
}
