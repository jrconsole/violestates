import React from 'react';
import './App.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import PropertyList from '../PropertyList/PropertyList';
import NavBar from '../NavBar/NavBar';
import PropForm from '../PropForm/PropForm';

const images = [
  { url: require("../../images/Property1/Image1.jpg") },
  { url: require('../../images/Property2/Image1.jpg') },
  { url: require('../../images/Property3/Image1.jpg') }
]; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      properties: [],
      displayForm: '',
     }

    this.displayForm = this.displayForm.bind(this);
    this.addProperty = this.addProperty.bind(this);
  }

  displayForm() {
    if (this.state.displayForm) {
      this.setState({ displayForm: '' });
    } else {
      this.setState({ displayForm: 'active' });
    }
  }

  addProperty(newProp) {
    const newList = this.state.properties.concat(newProp);
    this.setState({ properties: newList});
  }

  render() {
    return (
      <div>
        <NavBar />
        <header id="showcase">
          <ImageSlider images={images}/>
          <div className = "mission">
            <h2>Ohio Homes</h2>
            <h4>Rent an affordable home in Dayton or Portsmouth</h4>
          </div>
          <div className="button">
              <a href="#Portfolio">Properties</a>
          </div>
        </header>
        <PropertyList properties={this.state.properties} />
        <div class="button">
            <a href="#Portfolio">Properties</a>
        </div>
        <div class="button" id="addPropButton">
            <a onClick={this.displayForm} href="#Portfolio">Add Property</a>
        </div>
        <PropForm addProperty={this.addProperty} closeForm={this.displayForm} displayForm={this.state.displayForm} />
      </div>
    );
  }
}

export default App;
