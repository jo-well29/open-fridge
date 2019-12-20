import React from 'react'
import '../styles/BurgerMenu.css'


export const BurgerMenu = () => {
    return (
        <>
        <div className="hamburger-menu"><img src="https://i.imgur.com/igYHBRK.png" alt="" onClick={props.onClick}/></div>
        </>
    )
}