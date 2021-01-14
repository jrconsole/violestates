import React from 'react';
import './PropForm.css';
import { Redirect } from 'react-router-dom';

class PropForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            newProperty: {
                id: 1,
                price: '',
                numBed: '',
                numBath: '',
                name: '',
                address: '',
                city: '',
                redirect: null
            }
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ 
            newProperty: {
                ...this.state.newProperty, 
                [name] : value  
            }
        });
    }

    async handleSubmit(e) {    
        e.preventDefault();
        const newId = await this.props.addProperty(this.state.newProperty);
        console.log('newId:', newId)
        this.props.closeForm();
        document.getElementById('addPropForm').reset();
        
        this.setState({ redirect: `/properties/${newId}` });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        } else {
            return (
                <div className = {`addProp ${this.props.displayForm} .addPropMenu`} id='addPropMenu'>
                    <form id='addPropForm' onSubmit={this.handleSubmit}>
                        <h2>Create a Property</h2>
                        
                        <label htmlFor="price">Monthly Rent:</label>
                        <input 
                            type="number" 
                            id="price" 
                            name="price"
                            value={this.state.newProperty.price}
                            onChange={this.handleChange}
                            required></input>
                        <br></br>
                        
                        <label htmlFor="numBed">Number of Bedrooms:</label>
                        <input 
                            type="number" 
                            id="numBed" 
                            name="numBed"
                            value={this.state.newProperty.numBed}
                            onChange={this.handleChange}
                            required></input>
                        <br></br>
                        
                        <label htmlFor="numBath">Number of Bathrooms:</label>
                        <input 
                            type="number" 
                            id="numBath" 
                            name="numBath"
                            value={this.state.newProperty.numBath}
                            onChange={this.handleChange}
                            required></input>
                        <br></br>
                        
                        <label htmlFor="name">Property Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={this.state.newProperty.name}
                            onChange={this.handleChange}
                            required></input>
                        <br></br>
                        
                        <label htmlFor="address">Address:</label>
                        <input 
                            type="text" 
                            id="address" 
                            name="address"
                            value={this.state.newProperty.address}
                            onChange={this.handleChange}
                            required></input>
                        <br></br>

                        <select 
                            name="city" 
                            id="citySearch"  
                            className="filter-select"
                            defaultValue={'default'}
                            onChange={this.handleChange}
                            required>
                            <option value='default' disabled>Choose City</option>
                            {this.props.cities.map(city => {
                                return <option value={city.city_id}>{city.name}</option>
                            })}
                        </select>       
                        
                        <input type="submit" value="Add Property" className="button" id="submitProp"></input>
                    </form>
                    <div onClick={this.props.closeForm} className='formbox' id='formbox'></div>
                </div>
            );
        }
    }
}

export default PropForm;