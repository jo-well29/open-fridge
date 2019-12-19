import React from 'react'
import './styles/RecipeIdeas.css'
import './styles/RecipeCard.css'
import { RecipeTile } from './shared/RecipeTile'
import RecipeCard from './shared/RecipeCard'
import ToggleHeader from './shared/ToggleHeader'
import { recipeIndexer } from '../config'

   
export default class RecipeIdeas extends React.Component {
    constructor() {
        super() 
            this.state = {
                modalClick: false
        }
    }

    handleClick = (info) => {
        console.log('test', info)
        this.setState({modalClick:!this.state.modalClick})
    }
    
    
    render() {
        console.log(this.state.modalClick)
        const modal = 
        <div className="modal">
            <div onClick={this.handleClick}>X</div>
            <img src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80'/> 
            <div>'SUPER-DUPER-CASSEROLE'</div>
            <div>cooktime: 15</div>
        </div>
        
        
        
        
        
        const renderModal = this.state.modalClick ? modal : 'false'

        
        return (
            <>
                <ToggleHeader onClick={this.props.onClick} expand={this.props.expand} sectionName="recipes" label="Recipe ideas" color="mint" />
                <div className={`content ${this.props.expand === 'recipes' ? 'expand' : 'contract'}`}>
                    <div className='RecipeIdeas-container'>
                        <RecipeCard image_url='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80' name='SUPER-DUPER-CASSEROLE' cooktime='15' 
                        handleClick={this.handleClick}/>
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeTile image_url='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80' name='SUPER-DUPER-CASSEROLE' cooktime='15' />
                        {renderModal}
                    </div>
                </div>
            </>
        )
    }
}