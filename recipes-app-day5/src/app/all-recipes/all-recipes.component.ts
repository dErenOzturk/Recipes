import { Component, ViewChild } from '@angular/core';
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

    if (this.breakfastRecipes.includes(recipe)) {
      this.breakfastRecipes.splice(this.breakfastRecipes.indexOf(recipe), 1);
    } else if (this.mainCourseRecipes.includes(recipe)) {
      this.mainCourseRecipes.splice(this.mainCourseRecipes.indexOf(recipe), 1);
    } else if (this.dessertRecipes.includes(recipe)) {
      this.dessertRecipes.splice(this.dessertRecipes.indexOf(recipe), 1);
    }

    this.allRecipes.splice(this.warningIndex, 1);
    this.warningActive = false;
  }

  addFavoriteRecipe(recipe: any) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
  }

  removeFavoriteRecipe(recipe: any) {
    const index = this.favoriteRecipes.indexOf(recipe);
    if (index !== -1) {
      this.favoriteRecipes.splice(index, 1);
    }
  }

  successMessage: string = '';

  setFavorite(recipe: any) {
    recipe.isFavorite = !recipe.isFavorite;

    if (recipe.isFavorite) {
      this.addFavoriteRecipe(recipe);
      this.successMessage = `${recipe.title}, tarif defterinize eklendi.`;
      setTimeout(() => {
        this.successMessage = '';
      }, 1200); // 1.2 saniye sonra mesajı temizle
    } else {
      this.removeFavoriteRecipe(recipe);
      this.successMessage = `${recipe.title}, tarif defterinizden çıkarıldı.`;
      setTimeout(() => {
        this.successMessage = '';
      }, 1200); // 1.2 saniye sonra mesajı temizle;
    }
  }

  warningActive = false;
  warningIndex: number;

  openWarning(index:number) {
    this.warningIndex = index;
    this.warningActive = true;
    console.log(index);""
    
  }

  closeWarning() {
    this.warningActive = false;
  }
}
