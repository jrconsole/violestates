import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyView.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import { useParams } from 'react-router-dom';

const property = {
  images: [
    { url: require("../../images/Property1/Image1.jpg") },
    { url: require("../../images/Property1/Image2.jpg") },
    { url: require("../../images/Property1/Image3.jpg")}
  ]
}

class PropertyView extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      property: {id: null}
    }
  }

  componentDidMount() {
    this.getProperty();
  }

  async getProperty() {
    let property;
    if (this.props.property) {
      
      property = this.props.property;
    } else if (this.props.params && this.props.properties.length>0) {
    
      const { id } = this.props.params;
    console.log(this.props.properties)
    property = this.props.properties.find(property => {
      return property.id === Number(id);
    });
    } else {
      
      const url = window.location.href;
      let id;
      for (let i=url.length+1; i>=0; i--) {
        if (url[i] === '/') {
          id = url.substring(i+1);
          break;
        }
      }
      const response  = await fetch(`http://localhost:5000/properties/${id}`);
      const jsonResponse = await response.json();

      property = jsonResponse.property;
    }

    this.setState({ property })
  } 



  render() {
    return( 
      <div id={this.state.property.id} className = "propView">
          <ImageSlider height={550} images={property.images} />
          <div className="propInfo">
              <span>${this.state.property.price}/mo</span>
              <span>{this.state.property.num_bed}Bed/{this.state.property.num_bath}Bath</span>
          </div>
          <div className="propTitle">
              <h4>{this.state.property.name}</h4>
              <span>{this.state.property.address} {this.state.property.city}</span>
          </div>
          <div className="button">
              <Link to={`/property/${this.state.property.id}`}>Apply</Link>
          </div>
          <h6>{this.state.property.id}</h6>
      </div>
    )
  }
}

export default (props) => (
  <PropertyView
      {...props}
      params={useParams()}
  />
);