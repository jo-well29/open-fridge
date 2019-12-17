import React from 'react'
import './styles/Header.css'


const Header = () => {
    return (
        <div className="header">
            <div className="logo"><img src="https://i.imgur.com/ESkARC2.png" alt="" /></div>
            <h1>Open Fridge</h1>
            <div className="hamburger-menu"><img src="https://i.imgur.com/igYHBRK.png" alt="" /></div>
        </div>
    )
}

export default Header