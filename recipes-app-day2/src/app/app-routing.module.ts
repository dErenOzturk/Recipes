import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreakfastsComponent } from './breakfasts/breakfasts.component';
import { MainCoursesComponent } from './main-courses/main-courses.component';
import { DessertsComponent } from './desserts/desserts.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeContentComponent } from './recipe-content/recipe-content.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-recipes', component: AllRecipesComponent},
  { path: 'breakfasts', component: BreakfastsComponent },
  { path: 'main-courses', component: MainCoursesComponent },
  { path: 'desserts', component: DessertsComponent },
  { path: 'add-recipe', component: AddRecipeComponent},
  { path: 'recipe-content', component: RecipeContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
