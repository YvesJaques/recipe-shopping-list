import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://bakesbybrownsugar.com/wp-content/uploads/2021/10/Apple-Cakes-with-Pistachios-.jpg')
  ]

  constructor() {}

  ngOnInit() {

  }

}
