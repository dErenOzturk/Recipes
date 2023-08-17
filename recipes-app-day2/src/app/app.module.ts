import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { BreakfastsComponent } from './breakfasts/breakfasts.component';
import { MainCoursesComponent } from './main-courses/main-courses.component';
import { DessertsComponent } from './desserts/desserts.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipe.service';
import { RecipeContentComponent } from './recipe-content/recipe-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeContentComponent,
    BreakfastsComponent,
    MainCoursesComponent,
    DessertsComponent,
    AllRecipesComponent,
    AddRecipeComponent,
    RecipeContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
