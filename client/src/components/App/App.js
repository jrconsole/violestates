import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PropertySearch from '../PropertySearch/PropertySearch';
import PropertyView from '../PropertyView/PropertyView'
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      properties: [],
      displayForm: '',
      cities: [],
      redirect: null
     }

    this.addProperty = this.addProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
  }

  componentDidMount() {
    this.refreshProperties();
    this.getCities();
  }

  async getCities() {
    const response = await fetch('https://parseapi.back4app.com/classes/Usabystate_OH?limit=1000&order=name&keys=name',
        {
            headers: {
                'X-Parse-Application-Id': '5QgosAvEouEMeZ7PDe4lQhsProbVFYFwreLqdLXb', // This is your app's application id
                'X-Parse-REST-API-Key': '46IZ68RsuSLYRqvEaNckgxIPXfP3dlfTFEyGVzja', // This is your app's REST API key
            }
        }
    );
    const jsonResponse = await response.json();
    this.setState({ cities: jsonResponse.results });
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

  async deleteProperty({id}) {
    await fetch(`/properties/${id}`, { method: 'DELETE' });

    this.refreshProperties();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />

            <Switch>
              <Route exact path="/">
                <Home addProperty={this.addProperty} properties={this.state.properties} cities={this.state.cities}/>
              </Route>
              <Route path="/properties/:id">
                <PropertyView properties={this.state.properties} deleteProp={this.deleteProperty} />
              </Route>
              <Route path="/properties">
                <PropertySearch properties={this.state.properties} cities={this.state.cities} />
              </Route>
            </Switch>
          </div>
        </Router>
   
 
        
      </div>
    );
  }
}

export default App;
