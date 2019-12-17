import React from 'react'
import './styles/Inventory.css'
import ToggleHeader from './shared/ToggleHeader'

export const Inventory = (props) => {
    return (
        <>
            <ToggleHeader onClick={props.onClick} expand={props.expand} sectionName="inventory" label="What's in your fridge?" color="cocoa" />
            <div className={`content ${props.expand === 'inventory' ? 'expand' : 'contract'}` }>
                The content
            </div>
        </>
    )
}

export default Inventory;