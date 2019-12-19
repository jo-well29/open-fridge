import React from 'react'

class RecipeCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalClick: false
        }
    }

    // handleClick = (info) => {
    //         console.log('test', info)
    //         this.setState({modalClick:true})
    //     }

    render() {


        return (
            <div className='RecipeCard' onClick={(e) => this.props.handleClick(e, this.props.recipe)}>
                
                <div className='card-image-container'>
                    <img src={this.props.image_url} alt='card-recipe-img' />
                </div>
                <div className='card-info-container'>
                    <div className='cook-time'>
                        <p className='minutes'>{this.props.cooktime} min</p>
                    </div>

                    <div className='name'>
                        <h3>{this.props.name}</h3>
                    </div>
                </div>
              
            </div>
        )
    }
}
export default RecipeCard