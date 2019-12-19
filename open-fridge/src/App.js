import React from 'react';
import './App.css';
import Header from './component/Header'
import Filter from './component/Filter'
import Inventory from './component/Inventory'
import RecipeIdeas from './component/RecipeIdeas'


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expand: 'filter',
      ingredientSearch: '',
      filterTime: 15,
      filterTemp: null,
      filterFlavor: [],
      ingredients: []
    }
  }

  expander = (sectionName) => {
    if (this.state.expand !== sectionName) {
      this.setState({
        expand: sectionName
      })
    } else {
      this.setState({
        expand: null
      })
    }
  }

  textHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  sliderHandler = (e) => {
      this.setState({
      [e.target.name] : Number(e.target.value)
    })
  }

 selector = (e, list) => {
    let newList;
    if (this.state[list].includes(e.target.name)) {
      newList = [ ...this.state[list]]
      newList.splice(newList.indexOf(e.target.name), 1)
    } else {
      newList = [ ...this.state[list]]
      newList.push(e.target.name);
    }
    this.setState(state => (
      { [list]: newList }
    ))
  }

  tempToggle = (e) => {
    this.state.filterTemp === e.target.name ? this.setState({filterTemp: null}) : this.setState({filterTemp: e.target.name});
  }

  render() {
    const { filterTime, filterTemp, filterFlavor } = this.state;
    const filterData = { filterTime, filterTemp, filterFlavor };
    return (
      <div className="App">
        <Header />
        <Inventory expand={this.state.expand} onClick={() => this.expander('inventory')} textChange={this.textHandler} ingredientSearch={this.state.ingredientSearch} onSelect={this.selector} />
        <Filter formData={filterData} onChange={this.sliderHandler} expand={this.state.expand} onSelect={this.selector} tempToggle={this.tempToggle} onClick={() => this.expander('filter')} />
        <RecipeIdeas expand={this.state.expand} onClick={() => this.expander('recipes')} filterTime={this.state.filterTime} filterTemp={this.state.filterTemp} filterFlavor={this.state.filterFlavor} ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default App;
