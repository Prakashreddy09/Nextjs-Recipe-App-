import RecipeList from "@/components/recipe-list/index";

async function fetchListOfRecipes () {
    try{

        const apiRespone = await fetch('https://dummyjson.com/recipes')
        const data = await apiRespone.json()

        return data?.recipes
    }
    catch(e){
        throw new Error(e.message)
    }
} 

export default async function Recipes (){

    const recipeList = await fetchListOfRecipes();

    return (
        <RecipeList recipeList = {recipeList}/>
    )
}