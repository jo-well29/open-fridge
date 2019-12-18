import React from 'react'
import './styles/Inventory.css'
import ToggleHeader from './shared/ToggleHeader'
import IngredientSearch from './shared/IngredientSearch'
import Carousel from './shared/Carousel'

export const Inventory = ({ ingredientSearch, onSelect, onClick, expand, textChange }) => {

    return (
        <>
            <ToggleHeader onClick={onClick} expand={expand} sectionName="inventory" label="What's in your fridge?" color="cocoa" />
            <div className={`content ${expand === 'inventory' ? 'expand' : 'contract'}` }>
                <IngredientSearch ingredientSearch={ingredientSearch} onSelect={onSelect} textChange={textChange} />
                <Carousel onSelect={onSelect} />
            </div>
        </>
    )
}

export default Inventory;