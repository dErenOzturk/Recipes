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

  recipeDetails(i:number){
    this.recipeService.contentIndex = i;
    this.recipeService.recipeCategory = "breakfast";
  }
  
  deleteRecipe(recipe: any) {
    const index = this.breakfastRecipes.indexOf(recipe);
    if (index !== -1) {
      this.breakfastRecipes.splice(index, 1);
    }
  }
}
