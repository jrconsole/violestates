import React from 'react';
import './PropertyView.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import { useParams } from 'react-router-dom';
import ApplyForm from '../ApplyForm/ApplyForm';
import { Redirect } from 'react-router-dom';

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
      console.log(this.props.properties);
    const foundProperty = this.props.properties.find(property => {
      return property.id === Number(id);
    });
    property = foundProperty ? foundProperty : {id: null};
    console.log('propfind', property);
    } else {
      
      const url = window.location.href;
      let id;
      for (let i=url.length+1; i>=0; i--) {
        if (url[i] === '/') {
          id = url.substring(i+1);
          break;
        }
      }
      const response  = await fetch(`/props/${id}`);
      const jsonResponse = await response.json();

      property = jsonResponse.property;
    }

    this.setState({ property })
    console.log('this ran');
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

  async deleteProperty() {
    await this.props.deleteProp(this.props.params);
    alert('Property Deleted Successfully');
    
    this.setState({redirect: '/'})
  }

  render() {
    console.log(this.state.property ? this.state.property : 'no property');
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    } if (!this.state.property) {
      return (
        <>
          <h1>Sorry!</h1>
          <h5>Property not found. Please refresh or try again later.</h5>
        </>
      )
    } else {
      return( 
        <div id={this.state.property ? this.state.property.id : null} className = "propView">
            <ImageSlider height={550} images={property.images} />
            <div className="propInfo">
                <span>${this.state.property.price}/mo</span>
                <span>{this.state.property.num_bed}Bed/{this.state.property.num_bath}Bath</span>
            </div>
            <div className="propTitle">
                <h4>{this.state.property.name}</h4>
                <span>{this.state.property.address}, {this.state.property.city}</span>
            </div>
            <button onClick={this.displayApplyForm} >Apply</button>
            <button onClick={this.deleteProperty} >Delete</button>
            <h6>{this.state.property ? this.state.property.id : null}</h6>
            {this.renderApplyForm()}
        </div>
      )
    }
  }
}

export default (props) => (
  <PropertyView
      {...props}
      params={useParams()}
  />
);