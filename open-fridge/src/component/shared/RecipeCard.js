import React from 'react'

export const RecipeCard = ( props ) => {
    return (
    <div className='RecipeCard'>
        <div className='card-image-container'>
            <img src={props.image_url} alt='card-recipe-img'/>
        </div>
        <div className='card-info-container'>
            <div className='cook-time'>
                <p className='minutes'>{props.cooktime} min</p> 
            </div>

            <div className='name'>
                <h3>{props.name}</h3>
            </div>
        </div>
        
    </div>
    )
}