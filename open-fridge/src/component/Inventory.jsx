import React from 'react'
import './styles/Inventory.css'
import ToggleHeader from './shared/ToggleHeader'
import Carousel from './shared/Carousel'
import { ingredients, indexer } from '../config'

export const Inventory = (props) => {
    const index = indexer();
    const results = props.ingredientSearch.length > 0 ? Object.keys(index).filter(key => key.slice(0, props.ingredientSearch.length) == props.ingredientSearch) : null;
    console.log(`results: ${results}`);

    const resultButtons = results ? results.map((result, i) => { return (
        <button name={result}>
            {result.charAt(0).toUpperCase() + result.slice(1).replace('_',' ')} 
            <img src={ingredients[index[result]][result]} alt={result} />
        </button>
        )}) : null;

    return (
        <>
            <ToggleHeader onClick={props.onClick} expand={props.expand} sectionName="inventory" label="What's in your fridge?" color="cocoa" />
            <div className={`content ${props.expand === 'inventory' ? 'expand' : 'contract'}` }>
                <form className="ingredientSearch" onSubmit={(event) => event.preventDefault()}>
                    <input name="ingredientSearch" type="text" value={props.ingredientSearch} onChange={props.textChange} />
                </form>
                { resultButtons }
                <Carousel />
            </div>
        </>
    )
}

export default Inventory;