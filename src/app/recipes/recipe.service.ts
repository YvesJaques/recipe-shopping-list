import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe-list/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super Tasty Schnitzel - just awesome',
            'https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/1:1/w_1920,c_limit/chicken-schnitzel.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big fat burger',
            'A big fat burger',
            'https://c1.peakpx.com/wallpaper/791/638/395/appetite-beef-big-bread-bun-burger-wallpaper-preview.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
            ])
    ]

    getRecipes() {
        return this.recipes.slice();
    }
}