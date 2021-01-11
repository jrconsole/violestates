import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PropertyList from '../PropertyList/PropertyList';
import PropertyView from '../PropertyView/PropertyView'
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

  componentDidMount() {
    this.refreshProperties();
  }

  async refreshProperties() {
    const response = await fetch('/properties');
    const jsonResponse = await response.json();

    this.setState({ properties: jsonResponse.properties })
  }

  async addProperty(newProp) {
    const response = await fetch('/properties', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ property: newProp }) // body data type must match "Content-Type" header
    });
    const jsonResponse = await response.json();
    const newId = jsonResponse.property.id;
  
    this.refreshProperties();
    console.log('jsonreceived:', jsonResponse);
    return newId;
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
              <Route path="/properties/:id">
                <PropertyView properties={this.state.properties} />
              </Route>
              <Route path="/properties">
                <PropertyList properties={this.state.properties} />
              </Route>
            </Switch>
          </div>
        </Router>
   
 
        
      </div>
    );
  }
}

export default App;
