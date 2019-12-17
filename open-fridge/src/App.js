import React from 'react';
import './App.css';
import Filter from './component/Filter'
import Inventory from './component/Inventory'

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
        <Inventory expand={this.state.expand} onClick={() => this.expander('inventory')} />
        <Filter expand={this.state.expand} onClick={() => this.expander('filter')} />
      </div>
    );
  }
}

export default App;
