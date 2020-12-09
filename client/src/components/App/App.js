import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PropertyList from '../PropertyList/PropertyList';
import Property from '../Property/Property'
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      properties: [],
      displayForm: '',
     }

    this.addProperty = this.addProperty.bind(this);
  }

  addProperty(newProp) {
    const newList = this.state.properties.concat(newProp);
    this.setState({ properties: newList});
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />

            <Switch>
              <Route exact path="/">
                <Home addProperty={this.addProperty} properties={this.state.properties} />
              </Route>
              <Route path="/properties">
                <PropertyList properties={this.state.properties} />
              </Route>
              <Route path="/property/:id">
                <Property properties={this.state.properties} />
              </Route>
            </Switch>
          </div>
        </Router>
   
 
        
      </div>
    );
  }
}

export default App;
