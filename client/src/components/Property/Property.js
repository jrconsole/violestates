import React from 'react';
import { Link } from 'react-router-dom';
import './Property.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import { useParams } from 'react-router-dom';

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

  constructor(props){
    super(props);

    this.state = {
      property
    }
  }

  componentDidMount() {
    let property;
    if (this.props.property) {
      property = this.props.property;
    } else {
    const { id } = this.props.params;
    property = this.props.properties.find(property => {
      return property.id === Number(id);
    })
  }

    this.setState({ property });
  } 



  render() {
    return( 
      <div id={this.state.property.id} className = "property">
          <ImageSlider images={property.images} />
          <div className="propInfo">
              <span>${this.state.property.price}/mo</span>
              <span>{this.state.property.numBed}Bed/{this.state.property.numBath}Bath</span>
          </div>
          <div className="propTitle">
              <h4>{this.state.property.name}</h4>
              <span>{this.state.property.address} {this.state.property.city}</span>
          </div>
          <div className="button">
              <Link to={`/property/${this.state.property.id}`}>View Property</Link>
          </div>
          <h6>{this.state.property.id}</h6>
      </div>
    )
  }
}

export default (props) => (
  <Property
      {...props}
      params={useParams()}
  />
);