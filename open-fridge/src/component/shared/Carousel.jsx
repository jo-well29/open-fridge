import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { images } from "./images"
import { ingredients } from '../../config'


export default class MultipleItems extends Component {
  
  constructor(props) {
    super(props);
  }

  selector = (e) => {
    this.props.onSelect(e, 'ingredients');
  }

  render() {

    const ingredientMapper = (category) => {
      const map = Object.keys(ingredients[category]).map((item, i) => {
        return (
          <button key={i} name={item} onClick={this.selector}>
            <img name={item} src={ingredients[category][item]} style={{pointerEvents: 'none'}} />
          </button>
        )
      })
      return map;
    }

    const vegetables = ingredientMapper('vegetables');

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true
    };

    return (
      <div>
        <h2> Vegetables </h2>
        <Slider {...settings}>
          {vegetables}
        </Slider>
      </div>
    );
  }
}

