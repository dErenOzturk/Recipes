import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-content',
  templateUrl: './recipe-content.component.html',
  styleUrls: ['./recipe-content.component.css'],
})
export class RecipeContentComponent {
  constructor(private recipeService: RecipeService) {}
  category: string = this.recipeService.recipeCategory;
  index = this.recipeService.contentIndex;
  recipe: any;

  showCategoryRecipes() {
    switch (this.category) {
      case 'breakfast':
        this.recipe = this.recipeService.getBreakfastRecipes();
        break;
      case 'main-course':
        this.recipe = this.recipeService.getMainCourseRecipes();
        break;
      case 'dessert':
        this.recipe = this.recipeService.getDessertRecipes();
        break;
      case 'all-recipes':
        this.recipe = this.recipeService.getAllRecipes();
        break;
      case 'favorite':
        this.recipe = this.recipeService.getFavoriteRecipes();
        break;
    }
  }

  formatInstructions(instructions: string): string {
    const steps = instructions.split('.');
    let formattedInstructions = '';

    for (let i = 0; i < steps.length; i++) {
      formattedInstructions += `${i + 1}. ${steps[i]}.\n`;
    }

    return formattedInstructions;
  }
}
