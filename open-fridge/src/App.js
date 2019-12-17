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
      expand: 'filter'
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

  render() {
    return (
      <div className="App">
        <Header />
        <Inventory expand={this.state.expand} onClick={() => this.expander('inventory')} />
        <Filter expand={this.state.expand} onClick={() => this.expander('filter')} />
        <RecipeIdeas expand={this.state.expand} onClick={() => this.expander('recipes')} />
      </div>
    );
  }
}

export default App;
