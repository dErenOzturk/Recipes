import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent {
  constructor(
    private recipeService: RecipeService,
  ) {}

  addRecipe(data, form: NgForm) {
    data.ingredients = data.ingredients.split('\n');

    switch (data.category) {
      case 'breakfast':
        this.recipeService.addBreakfastRecipes(data);
        break;
      case 'main-course':
        this.recipeService.addMainCourseRecipes(data);
        break;
      case 'dessert':
        this.recipeService.addDessertRecipes(data);
        break;
    }
    
    form.resetForm();

  }
}
