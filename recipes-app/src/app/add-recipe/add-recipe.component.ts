import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent {
  constructor(private recipeService: RecipeService) {}

  recipeName: string = '';
  recipeImage: string = '';
  recipeIngredients: string = '';
  recipeInstructions: string = '';
  recipeCategory: string = '';

  addRecipe() {
    const recipeData = {
      title: this.recipeName,
      imgURL: this.recipeImage,
      ingredients: this.recipeIngredients.split('\n'),
      instructions: this.recipeInstructions,
    };
    //alert(recipeData.title) -> Çalışıp çalışmadığını denemek için
    switch (this.recipeCategory) {
      case 'Kahvaltı':
        this.recipeService.addBreakfastRecipes(recipeData);
        break;
      case 'Ana yemek':
        this.recipeService.addMainCourseRecipes(recipeData);
        break;
      case 'Tatlı':
        this.recipeService.addDessertRecipes(recipeData);
        break;
    }
    //this.recipeService.addBreakfastRecipes(recipeData); -> Çalışıp çalışmadığını deenemek için
  }

}
