import React from 'react'

export const RecipeTile = (props) => {
    return (
        <div className='RecipeTile'>
            <div className='image-container'>
                <img src={props.image_url} alt='recipe-img' />
            </div>
            <div className='Tile-info-container'>
                <h3>{props.name}</h3>
                <p className='recipe-cooktime'>{props.cooktime} minutes</p>
            </div>
        </div>
    )
}
