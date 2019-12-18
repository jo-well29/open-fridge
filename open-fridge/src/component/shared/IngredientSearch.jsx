import React from 'react'
import { ingredients, indexer } from '../../config'
import SearchIcon from '../../images/Search.png'

export const IngredientSearch = ({ ingredientSearch, onSelect, textChange }) => {
    const index = indexer();
    const results = ingredientSearch.length > 1 ? Object.keys(index).filter(key => key.slice(0, ingredientSearch.length) == ingredientSearch) : null;
    console.log(`results: ${results}`);

    const resultButtons = results ? results.map((result, i) => { return (
        <button name={result} onClick={(e) => onSelect(e, 'ingredients')}>
            {result.charAt(0).toUpperCase() + result.slice(1).replace('_',' ')} 
            <img src={ingredients[index[result]][result]} alt={result} />
        </button>
        )}) : null;

    return (
        <>
        <form className="ingredientSearch" onSubmit={(event) => event.preventDefault()}>
            <img src={SearchIcon} alt="search" />
            <input name="ingredientSearch" type="text" value={ingredientSearch} onChange={textChange} />
        </form>
        { resultButtons }
        </>
    )
}

export default IngredientSearch;