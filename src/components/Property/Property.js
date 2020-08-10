import React from 'react';
import './Property.css';
import ImageSlider from '../ImageSlider/ImageSlider';

const property = {
  uniqueId: 1,
  images: [
    { url: require("../../images/Property1/Image1.jpg") },
    { url: require("../../images/Property1/Image2.jpg") },
    { url: require("../../images/Property1/Image3.jpg")}
  ],
  name: "This is Property 1",
  address: "123 Awesome Way",
  city: "Cool Town",
  state: "CA",
  zipCode: "10101",
  rent: 666,
  numBed: 2,
  numBath: 2,
  sqft: 1500
}

class Property extends React.Component {

  render() {
    return( 
      <div id={this.props.property.uniqueId} className = "property">
          <ImageSlider images={property.images} />
          <div className="propInfo">
              <span>${this.props.property.price}/mo</span>
              <span>{this.props.property.numBed}Bed/{this.props.property.numBath}Bath</span>
          </div>
          <div className="propTitle">
              <h4>{this.props.property.name}</h4>
              <span>{this.props.property.address} {this.props.property.city}</span>
          </div>
          <div className="button">
              <a href={`./property${this.props.property.uniqueId}.html`}>View Property</a>
          </div>
          <h6>{this.props.property.id}</h6>
      </div>
    )
  }
}

export default Property;