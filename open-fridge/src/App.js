import React from 'react';
import './App.css';
import Header from './component/Header'
import Filter from './component/Filter'
import Inventory from './component/Inventory'
import RecipeIdeas from './component/RecipeIdeas'
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import palette from 'material-ui/system';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expand: 'filter',
      ingredientSearch: '',
      filterTime: 15,
      filterTemp: null,
      filterFlavor: [],
      open: false,
      ingredients: []
    }
  }



  handleToggle = () => this.setState({
    open: !this.state.open
  })

  handleClose = () => this.setState({
    open: false
  });

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
      [e.target.name]: Number(e.target.value)
    })
  }

  selector = (e, list) => {
    let newList;
    if (this.state[list].includes(e.target.name)) {
      newList = [...this.state[list]]
      newList.splice(newList.indexOf(e.target.name), 1)
    } else {
      newList = [...this.state[list]]
      newList.push(e.target.name);
    }
    this.setState(state => (
      { [list]: newList }
    ))
  }

  tempToggle = (e) => {
    this.state.filterTemp === e.target.name ? this.setState({ filterTemp: null }) : this.setState({ filterTemp: e.target.name });
  }

  render() {
    const { filterTime, filterTemp, filterFlavor } = this.state;
    const filterData = { filterTime, filterTemp, filterFlavor };
    return (
      <div className="App">
        <Header onClick={this.handleToggle} />
        <Inventory expand={this.state.expand} onClick={() => this.expander('inventory')} textChange={this.textHandler} ingredientSearch={this.state.ingredientSearch} />
        <Filter formData={filterData} onChange={this.sliderHandler} expand={this.state.expand} onSelect={this.selector} tempToggle={this.tempToggle} onClick={() => this.expander('filter')} />
        <RecipeIdeas expand={this.state.expand} onClick={() => this.expander('recipes')} />
        <div>
          <MuiThemeProvider>
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              openSecondary={true}
              onRequestChange={(open) => this.setState({ open })}
              className="test"
            >
              <div className='MyF'>
                <MenuItem
                >
                  <p className='FridgeP'>My Fridge</p>
              </MenuItem>
              </div>
              <div className='MyR'>
                <MenuItem>
                <p className='RecipeP'>My Recipes</p>
              </MenuItem>
              </div>
              <div className='MyS'>
                <MenuItem>
                  <p className='ShoppingP'>My Shopping List</p>
              </MenuItem>
              </div>
              <div className='MyD'>
                <MenuItem>
                  <p className='DietaryP'>My Dietary Restrictions</p>
              </MenuItem>
              </div>
              <div className='MyP'>
                <MenuItem>
                  <p className='PreferencesP'>My Preferences</p>
              </MenuItem>
              </div>
            </Drawer>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;

