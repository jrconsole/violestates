import React from 'react';
import './PropertySearch.css';
import PropertyList from '../PropertyList/PropertyList';

const properties = [
  {
    "id": 1,
    "price": 500,
    "num_bed": 1,
    "num_bath": 1,
    "name": "My First Apartment",
    "address": "123 Main St.",
    "city": "Dayton"
  },
  {
    "id": 2,
    "price": 1000,
    "num_bed": 2,
    "num_bath": 2,
    "name": "My First Apartment",
    "address": "123 Main St.",
    "city": "Columbus"
  },
  {
    "id": 3,
    "price": 1500,
    "num_bed": 3,
    "num_bath": 3,
    "name": "My First Apartment",
    "address": "123 Main St.",
    "city": "Anchorage"
  },
  {
    "id": 4,
    "price": 2000,
    "num_bed": 4,
    "num_bath": 4,
    "name": "My First Apartment",
    "address": "123 Main St.",
    "city": "WrightPat"
  }
];

class PropertySearch extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      allProperties: this.props.properties, 
      selectedProperties: properties,
      filters: {
        numBed: '',
        numBath: '',
        price: '',
        city: ''
      }
     }

     this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    const newFilters = {
      ...this.state.filters,
      [name] : value
    };
    this.setState({ 
        filters: newFilters
    });

    this.filterProperties(newFilters);
  }

  filterProperties(filters) {
    const allProperties = properties;
    let bedProperties, bathProperties, priceProperties, cityProperties;
    if(filters.numBed) {
      bedProperties = allProperties.filter(property => property.num_bed >= filters.numBed);
    } else {
      bedProperties = allProperties;
    }

    if (filters.numBath) {
      bathProperties = bedProperties.filter(property => property.num_bath >= filters.numBath);
    } else {
      bathProperties = bedProperties;
    }

    if (filters.price) {
      priceProperties = bathProperties.filter(property => property.price <= filters.price);
    } else {
      priceProperties = bathProperties;
    }

    if (filters.city) {
      cityProperties = priceProperties.filter(property => {
        if (filters.city === 'default') {
          return true;
        } else {
          return property.city === filters.city
        }
      });
    } else {
      cityProperties = priceProperties;
    }

    this.setState({ selectedProperties: cityProperties })
  }

  renderFilterSelects() {
    const cities = this.props.cities;
    return (
      <>
        <label htmlFor="numBed">Bedrooms(min)</label>
          <input 
              type="number" 
              id="numBedFilter" 
              name="numBed"
              value={this.state.filters.numBed}
              onChange={this.handleChange}></input>
        <br/>

        <label htmlFor="numBath">Bathrooms(min):</label>
          <input 
              type="number" 
              id="numBathFilter" 
              name="numBath"
              value={this.state.filters.numBath}
              onChange={this.handleChange}></input>
        <br/>

        <label htmlFor="price">Rent(max):</label>
          <input 
              type="number" 
              id="priceFilter" 
              name="price"
              value={this.state.filters.price}
              onChange={this.handleChange}></input>
        <br/>
        
        <select 
          name="city" 
          id="citySearch"  
          className="filter-select"
          defaultValue={'default'}
          onChange={this.handleChange}>
          <option value='default'>All Cities</option>
          {cities.map(city => {
            return <option value={city.city_id}>{city.name}</option>
          })}
        </select>
        
      </>
    )
  }

  render() {
    return (
      <div className="search" id="search">
        <br/><br/>
        {this.renderFilterSelects()}
        <PropertyList properties={this.state.selectedProperties} />
      </div>
    )
  }
}

export default PropertySearch;