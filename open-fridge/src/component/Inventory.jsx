import React from 'react'
import './styles/Inventory.css'
import ToggleHeader from './shared/ToggleHeader'
import IngredientSearch from './shared/IngredientSearch'
import Carousel from './shared/Carousel'

export const Inventory = ({ ingredientSearch, onSelect, onClick, expand, textChange, ingredients }) => {

    return (
        <>
            <ToggleHeader onClick={onClick} expand={expand} sectionName="inventory" label="What's in your fridge?" color="cocoa" />
            <div className={`content ${expand === 'inventory' ? 'expand' : 'contract'}` }>
                <IngredientSearch ingredientSearch={ingredientSearch} selected={ingredients} onSelect={onSelect} textChange={textChange} />
                <Carousel selected={ingredients} onSelect={onSelect} />
            </div>
        </>
    )
}

export default Inventory;