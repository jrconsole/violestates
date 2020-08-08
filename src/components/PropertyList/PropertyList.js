import React from 'react';
import './PropertyList.css';
import Property from '../Property/Property'

class PropertyList extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="Portfolio">
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
      </div>
    )
  }
}

export default PropertyList;