import React from 'react'
import '../styles/ToggleHeader.css'
import DownArrow from '../../images/DownArrow.svg'
import UpArrow from '../../images/UpArrow.svg'

const ToggleHeader = (props) => {
    return (
        <div className={`toggleheader ${props.color} ${props.sectionName}`} >
            <h2 onClick={props.onClick}>{props.label}</h2> {props.children} <img className="arrow" src={props.expand === props.sectionName ? DownArrow : UpArrow } alt="arrow indicator"  onClick={props.onClick} />
        </div>
    )
}

export default ToggleHeader;

