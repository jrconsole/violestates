import React from 'react';
import { Link } from 'react-router-dom';
import './Property.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import { useParams } from 'react-router-dom';

const property = {
  images: [
    { url: require("../../images/Property1/Image1.jpg") },
    { url: require("../../images/Property1/Image2.jpg") },
    { url: require("../../images/Property1/Image3.jpg")}
  ]
}

class Property extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      property: this.getProperty()
    }
  }

  getProperty() {
    let property;
    if (this.props.property) {
      property = this.props.property;
    } else {
    const { id } = this.props.params;
    property = this.props.properties.find(property => {
      return property.id === Number(id);
    })
  }

    return property;
  } 



  render() {
    return( 
      <div id={this.state.property.id} className = "property">
          <ImageSlider height={300} images={property.images} />
          <div className="propInfo">
              <span>${this.state.property.price}/mo</span>
              <span>{this.state.property.num_bed}Bed/{this.state.property.num_bath}Bath</span>
          </div>
          <div className="propTitle">
              <h4>{this.state.property.name}</h4>
              <span>{this.state.property.address}, {this.state.property.city} OH</span>
          </div>
          <div className="button">
              <Link to={`/properties/${this.state.property.id}`}>View Property</Link>
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