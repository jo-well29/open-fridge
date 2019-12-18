import React from 'react'
import './styles/Inventory.css'
import ToggleHeader from './shared/ToggleHeader'
import Carousel from './shared/Carousel'
import { ingredients, indexer } from '../config'

export const Inventory = ({ ingredientSearch, onSelect, onClick, expand, textChange }) => {
    const index = indexer();
    const results = ingredientSearch.length > 0 ? Object.keys(index).filter(key => key.slice(0, ingredientSearch.length) === ingredientSearch) : null;
    console.log(`results: ${results}`);

    const resultButtons = results ? results.map((result, i) => { return (
        <button name={result} onClick={(e) => onSelect(e, 'ingredients')}>
            {result.charAt(0).toUpperCase() + result.slice(1).replace('_',' ')} 
            <img src={ingredients[index[result]][result]} alt={result} />
        </button>
        )}) : null;

    return (
        <>
            <ToggleHeader onClick={onClick} expand={expand} sectionName="inventory" label="What's in your fridge?" color="cocoa" />
            <div className={`content ${expand === 'inventory' ? 'expand' : 'contract'}` }>
                <form className="ingredientSearch" onSubmit={(event) => event.preventDefault()}>
                    <input name="ingredientSearch" type="text" value={ingredientSearch} onChange={textChange} />
                </form>
                { resultButtons }
                <Carousel onSelect={onSelect} />
            </div>
        </>
    )
}

export default Inventory;