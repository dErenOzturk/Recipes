import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-main-courses',
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.css']
})
export class MainCoursesComponent {
  mainCourseRecipes = this.recipeService.getMainCourseRecipes();

  constructor(private recipeService: RecipeService) {}

  deleteRecipe(recipe: any) {
    const index = this.mainCourseRecipes.indexOf(recipe);
    if (index !== -1) {
      this.mainCourseRecipes.splice(index, 1);
    }
  }
}
