import React from 'react'
import '../styles/ToggleHeader.css'
import DownArrow from '../images/DownArrow.svg'
import UpArrow from '../images/UpArrow.svg'

const ToggleHeader = (props) => {
    return (
        <div className={`toggleheader ${props.color} ${props.expand}`} onClick={props.onClick} >
            <h2>{props.label}</h2> <img src={props.expand ? DownArrow : UpArrow } />
        </div>
    )
}

export default ToggleHeader;