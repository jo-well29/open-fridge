import React from 'react';
import './App.css';
import Header from './component/Header'
import Filter from './component/Filter'
import Inventory from './component/Inventory'
import { RecipeIdeas } from './component/RecipeIdeas'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expand: 'filter',
      filterTime: 15,
      filterTemp: '',
      filterFlavor: []
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

  changeHandler = (e) => {
    const key = `filter.${e.target.name}`;
    this.setState({
      [e.target.name] : Number(e.target.value)
    })
  }

  buttonPusher = (e, list) => {

    console.log(list)
    console.log(this.state[list])
    console.log(e.target.name)
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

  render() {
    const { filterTime, filterTemp, filterFlavor } = this.state;
    const filterData = { filterTime, filterTemp, filterFlavor };
    return (
      <div className="App">
        <Header />
        <Inventory expand={this.state.expand} onClick={() => this.expander('inventory')} />
        <Filter formData={filterData} onChange={this.changeHandler} expand={this.state.expand} onSelect={this.buttonPusher} onClick={() => this.expander('filter')} />
        <RecipeIdeas expand={this.state.expand} onClick={() => this.expander('recipes')} />
      </div>
    );
  }
}

export default App;
