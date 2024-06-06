import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://bakesbybrownsugar.com/wp-content/uploads/2021/10/Apple-Cakes-with-Pistachios-.jpg'),
    new Recipe('Test Recipe 2', 'This is simply a test 2', 'https://bakesbybrownsugar.com/wp-content/uploads/2021/10/Apple-Cakes-with-Pistachios-.jpg')
  ]

  constructor() {}

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
