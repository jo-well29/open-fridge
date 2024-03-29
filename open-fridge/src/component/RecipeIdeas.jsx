import React from 'react'
import './styles/RecipeIdeas.css'
import './styles/RecipeCard.css'
import { RecipeTile } from './shared/RecipeTile'
import RecipeCard from './shared/RecipeCard'
import ToggleHeader from './shared/ToggleHeader'
import { recipeIndexer } from '../config'

export default class RecipeIdeas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalClick: false,
            modalRecipe: {
                image: '',
                name: '',
                ingredients: [],
                instructions: [],
                description: '',
                time: 0
            },
            rands: [1, 2, 3]
        }
    }

    componentDidMount = () => {
        this.randomizer();
    }

    randomizer = async () => {
        const recipes = await recipeIndexer();
        const rands = [
            Math.floor(Math.random() * recipes.length),
            Math.floor(Math.random() * recipes.length),
            Math.floor(Math.random() * recipes.length)
        ];
        this.setState({ rands: rands });
    }

    results = () => {
        const recipes = recipeIndexer();
        const results = recipes.filter(recipe => Object.keys(recipe.ingredients).includes(this.props.ingredients[0])).filter(recipe => recipe.time <= this.props.filterTime);
        let i = 0;
        while (results.length < 3) {
            results.push(recipes[this.state.rands[i]])
            i++;
        }
        return results.slice(0, 3);
    }

    modalClick = (e, recipe) => {
        if (recipe) {
            this.setState({
                modalClick: !this.state.modalClick,
                modalRecipe: recipe
            })
        } else {
            this.setState({
                modalClick: !this.state.modalClick
            })
        }
    }

    render() {

        const recipeTiles = this.results().map((recipe, i) => <RecipeTile key={i} image_url={recipe.image} name={recipe.name} cooktime={recipe.time} handleClick={this.modalClick} recipe={recipe} />)
        console.log(this.state.modalClick)

        const modal = 
        <div className="recipeModal">
            <div className="exit-button" onClick={this.modalClick}>X</div>
            <img src={this.state.modalRecipe.image}/> 
            <div>{this.state.modalRecipe.name.toUpperCase()}</div>
            <div>Ingredients: {Object.keys(this.state.modalRecipe.ingredients).join(', ').replace('_',' ')}</div>
            <div>Cook time: {this.state.modalRecipe.time}</div>
            <div>Description: {this.state.modalRecipe.description}</div>
        </div>
            
        const renderModal = this.state.modalClick ? modal : false

        return (
            <>

                <ToggleHeader onClick={this.props.onClick} expand={this.props.expand} sectionName="recipes" label="Recipe ideas" color="mint" />
                <div className={`content ideas ${this.props.expand === 'recipes' ? 'expand' : 'contract'}`}>
                    <div className='RecipeIdeas-container'>
                        {recipeTiles}
                        {/* <RecipeCard image_url='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80' name='SUPER-DUPER-CASSEROLE' cooktime='15' 
                        handleClick={this.modalClick}/> */}
                        {/* <RecipeTile image_url='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80' name='SUPER-DUPER-CASSEROLE' cooktime='15' /> */}
                        {renderModal}
                    </div>
                </div>

            </>
        )
    }

}