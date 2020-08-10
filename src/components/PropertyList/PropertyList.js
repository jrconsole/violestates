import React from 'react';
import './PropertyList.css';
import Property from '../Property/Property'

class PropertyList extends React.Component{

  render() {
    return (
      <div className="Portfolio">
        {this.props.properties.map(property => {
          return <Property property={property} />
        })} 
      </div>
    )
  }
}

export default PropertyList;