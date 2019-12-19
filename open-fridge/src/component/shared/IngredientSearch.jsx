import React from 'react'
import '../styles/IngredientSearch.css'
import { ingredients, indexer } from '../../config'
import SearchIcon from '../../images/Search.png'

export const IngredientSearch = ({ ingredientSearch, onSelect, textChange, selected }) => {
    const index = indexer();
    const results = ingredientSearch.length > 1 ? Object.keys(index).filter(key => key.slice(0, ingredientSearch.length) == ingredientSearch) : null;
    console.log(`results: ${results}`);

    const resultButtons = results ? results.map((result, i) => { return (
        <div className={`result${selected.includes(result) ? ' selected' : ''}`} id={result} style={{cursor: 'pointer'}} onClick={(e) => onSelect(e, 'ingredients')}>
            <img key={i} id={result} src={ingredients[index[result]][result]} alt={result} />
            <h3>{result.charAt(0).toUpperCase() + result.slice(1).replace('_',' ')} </h3>
        </div>
        )}) : null;

    return (
        <>
        <form className="ingredientSearch" onSubmit={(event) => event.preventDefault()}>
            <img src={SearchIcon} alt="search" />
            <input name="ingredientSearch" type="text" value={ingredientSearch} onChange={textChange} />
        </form>
        <div className="searchResults">
            { resultButtons }
        </div>
        </>
    )
}

export default IngredientSearch;