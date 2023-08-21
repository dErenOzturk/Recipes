import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-main-courses',
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.css'],
})
export class MainCoursesComponent {
  constructor(private recipeService: RecipeService) {}

  mainCourseRecipes = this.recipeService.getMainCourseRecipes();
  allRecipes = this.recipeService.getAllRecipes();
  favoriteRecipes = this.recipeService.getFavoriteRecipes();

  recipeDetails(i: number) {
    this.recipeService.contentIndex = i;
    this.recipeService.recipeCategory = 'main-course';
  }

  deleteRecipe(recipe: any) {
    const indexMC = this.mainCourseRecipes.indexOf(recipe);
    const indexAll = this.allRecipes.indexOf(recipe);

    this.allRecipes.splice(indexAll, 1);
    this.mainCourseRecipes.splice(indexMC, 1);
  }

  setFavorite(recipe: any) {
    const index = this.mainCourseRecipes.indexOf(recipe);
    const indexFav = this.favoriteRecipes.indexOf(recipe);

    this.mainCourseRecipes[index].isFavorite = !this.mainCourseRecipes[index].isFavorite;

    if(this.mainCourseRecipes[index].isFavorite){
      this.recipeService.addFavoriteRecipes(this.mainCourseRecipes[index]);
    }
    else {
      this.favoriteRecipes.splice(indexFav, 1);
    }
  }
}
