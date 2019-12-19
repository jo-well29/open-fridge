import React from 'react'
import './styles/RecipeIdeas.css'
import './styles/RecipeCard.css'
import { RecipeTile } from './shared/RecipeTile'
import { RecipeCard } from './shared/RecipeCard'
import ToggleHeader from './shared/ToggleHeader'
import { recipeIndexer } from '../config'


export const RecipeIdeas = ({ onClick, expand, filterTime, filterTemp, filterFlavor, ingredients }) => {

    // console.log(recipeIndexer())
    const results = () => {
        const recipes = recipeIndexer();
        const results = recipes.filter(recipe => Object.keys(recipe.ingredients).includes(ingredients[0])).filter(recipe => recipe.time <= filterTime);
        return results;
    }

    console.log(results());
    const recipeTiles = results().map(recipe => <RecipeTile image_url={recipe.image} name={recipe.name} cooktime={recipe.time} />)

    return (
        <>
        <ToggleHeader onClick={onClick} expand={expand} sectionName="recipes" label="Recipe ideas" color="mint" />
        <div className={`content ${expand === 'recipes' ? 'expand' : 'contract'}` }>
            <div className='RecipeIdeas-container'>
                {/* <RecipeCard image_url='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80' name='SUPER-DUPER-CASSEROLE' cooktime='15'/> */}
                {recipeTiles}
                {/* <RecipeTile image_url='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80' name='SUPER-DUPER-CASSEROLE' cooktime='15'/> */}
            </div>
        </div>
        </>
    )
}