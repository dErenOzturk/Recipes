import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-breakfasts',
  templateUrl: './breakfasts.component.html',
  styleUrls: ['./breakfasts.component.css']
})
export class BreakfastsComponent {
  breakfastRecipes = this.recipeService.getBreakfastRecipes();

  constructor(private recipeService: RecipeService) {}
  
  deleteRecipe(recipe: any) {
    const index = this.breakfastRecipes.indexOf(recipe);
    if (index !== -1) {
      this.breakfastRecipes.splice(index, 1);
    }
  }
}
