import { Recipe } from "./recipe-list/recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is simply a test', 'https://bakesbybrownsugar.com/wp-content/uploads/2021/10/Apple-Cakes-with-Pistachios-.jpg'),
        new Recipe('Test Recipe 2', 'This is simply a test 2', 'https://bakesbybrownsugar.com/wp-content/uploads/2021/10/Apple-Cakes-with-Pistachios-.jpg')
    ]

    getRecipes() {
        return this.recipes.slice();
    }
}