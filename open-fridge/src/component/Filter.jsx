import React from 'react'
import '../styles/Filter.css'
import ToggleHeader from '../shared/ToggleHeader'

const Filter = (props) => {
    return (
        <>
            <ToggleHeader onClick={props.onClick} name="filter" label="Filter" color="magenta" />
            <div className={`content ${props.expand === 'filter' ? 'expand' : 'contract'}` }>
                    The content
            </div>
        </>
    )
}

export default Filter;