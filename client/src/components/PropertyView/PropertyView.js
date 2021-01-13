import React from 'react';
import './PropertyView.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import { useParams } from 'react-router-dom';
import ApplyForm from '../ApplyForm/ApplyForm';

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
      property: {id: null},
      displayForm: false
    }

    this.displayApplyForm = this.displayApplyForm.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
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
      const response  = await fetch(`/properties/${id}`);
      const jsonResponse = await response.json();

      property = jsonResponse.property;
    }

    this.setState({ property })
  } 

  async deleteProperty() {
    const { id } = this.props.params;
    const response = await fetch(`/properties/${id}`, { method: 'DELETE' });
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    alert("Property Deleted Successfully");
    this.props.history.push('/');
  }

  displayApplyForm() {
    if (!this.state.displayForm) {
      this.setState({ displayForm: true });
    } else {
      this.setState({ displayForm: false })
    }
  }
  
  renderApplyForm() {
    if (this.state.displayForm) {
      return <ApplyForm closeForm={this.displayApplyForm} />;
    }
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
          <button onClick={this.displayApplyForm} >Apply</button>
          <button onClick={this.deleteProperty} >Delete</button>
          <h6>{this.state.property.id}</h6>
          {this.renderApplyForm()}
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