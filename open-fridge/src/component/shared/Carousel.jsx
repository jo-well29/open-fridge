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
    console.log(this.props.selected);

    const ingredientMapper = (category) => {
      const map = Object.keys(ingredients[category]).map((item, i) => {
        return (
          <div key={i} id={item} className={`ingredientButton${ this.props.selected.includes(item) ? ' selected' : '' }`} style={{pointerEvents: 'none'}} >
            <img id={item} src={ingredients[category][item]} style={{cursor: 'pointer'}} onClick={this.selector} />
          </div>
        )
      })
      return map;
    }

    const vegetables = ingredientMapper('vegetables');
    const proteins = ingredientMapper('proteins');
    const carbohydrates = ingredientMapper('carbohydrates');
    const dairy = ingredientMapper('dairy');
    const spices = ingredientMapper('spices');

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true
    };

    return (
      <>
      <div className="carousel-holder">
        <h2> Vegetables </h2>
        <Slider {...settings}>
          {vegetables}
        </Slider>
      </div>
      <div className="carousel-holder">
        <h2> Proteins </h2>
        <Slider {...settings}>
          {proteins}
        </Slider>
      </div>
      <div className="carousel-holder">
        <h2> Carbohydrates </h2>
        <Slider {...settings}>
          {carbohydrates}
        </Slider>
      </div>
      <div className="carousel-holder">
        <h2> Dairy </h2>
        <Slider {...settings}>
          {dairy}
        </Slider>
      </div>
      <div className="carousel-holder">
        <h2> Spices </h2>
        <Slider {...settings}>
          {spices}
        </Slider>
      </div>
      </>
    );
  }
}

