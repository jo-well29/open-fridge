import React from 'react'
import './styles/RecipeIdeas.css'
import './styles/RecipeCard.css'
import { RecipeTile } from './shared/RecipeTile'
import { RecipeCard } from './shared/RecipeCard'
import ToggleHeader from './shared/ToggleHeader'


export const RecipeIdeas = (props) => {
    return (
        <>
        <ToggleHeader onClick={props.onClick} expand={props.expand} sectionName="recipes" label="Recipe ideas" color="mint" />
        <div className={`content ${props.expand === 'recipes' ? 'expand' : 'contract'}` }>
            <div className='RecipeIdeas-container'>
                <RecipeCard image_url='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80' name='SUPER-DUPER-CASSEROLE' cooktime='15'/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeTile image_url='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80' name='SUPER-DUPER-CASSEROLE' cooktime='15'/>
            </div>
        </div>
        </>
    )
}