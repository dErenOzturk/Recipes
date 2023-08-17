import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent {
  dessertRecipes = this.recipeService.getDessertRecipes();

  constructor(private recipeService: RecipeService) {}

  recipeDetails(i:number){
    this.recipeService.contentIndex = i;
    this.recipeService.recipeCategory = "dessert";
  }
  
  deleteRecipe(recipe: any) {
    const index = this.dessertRecipes.indexOf(recipe);
    if (index !== -1) {
      this.dessertRecipes.splice(index, 1);
    }
  }
}
