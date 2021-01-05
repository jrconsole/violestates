import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
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
  }

  displayForm() {
    if (this.state.displayForm) {
      this.setState({ displayForm: '' });
    } else {
      this.setState({ displayForm: 'active' });
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <header id="showcase">
          <ImageSlider height={550} images={images}/>
          <div className = "mission">
            <h2>Ohio Homes</h2>
            <h4>Rent an affordable home in Dayton or Portsmouth</h4>
          </div>
        </header>
        <div className="button">
              <Link to="/properties">Properties</Link>
          </div>
          <div className="button" id="addPropButton">
            <a onClick={this.displayForm} href="#Portfolio">Add Property</a>
          </div>
        <PropertyList properties={this.props.properties} />
        <div className="button">
            <Link to="/properties">Properties</Link>
        </div>
        <div className="button" id="addPropButton">
            <a onClick={this.displayForm} href="#Portfolio">Add Property</a>
        </div>
        <PropForm addProperty={this.props.addProperty} closeForm={this.displayForm} displayForm={this.state.displayForm} />
      </div>
    );
  }
}

export default App;
