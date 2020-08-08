import React from 'react';
import './App.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import PropertyList from '../PropertyList/PropertyList';
import NavBar from '../NavBar/NavBar'

const images = [
  { url: require("../../images/Property1/Image1.jpg") },
  { url: require('../../images/Property2/Image1.jpg') },
  { url: require('../../images/Property3/Image1.jpg') }
]; 

function App() {
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
            <a href="./properties.html">Properties</a>
        </div>
      </header>
      <PropertyList />
      
    </div>
  );
}

export default App;
