import React from 'react';
import './PropForm.css';

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
                city: ''
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
        this.props.history.push(`/properties/${newId}`);
    }

    render() {
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
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label htmlFor="numBed">Number of Bedrooms:</label>
                    <input 
                        type="number" 
                        id="numBed" 
                        name="numBed"
                        value={this.state.newProperty.numBed}
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label htmlFor="numBath">Number of Bathrooms:</label>
                    <input 
                        type="number" 
                        id="numBath" 
                        name="numBath"
                        value={this.state.newProperty.numBath}
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label htmlFor="name">Property Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={this.state.newProperty.name}
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label htmlFor="address">Address:</label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address"
                        value={this.state.newProperty.address}
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label htmlFor="city">City:</label>
                    <input 
                        type="text" 
                        id="city" 
                        name="city"
                        value={this.state.newProperty.city}
                        onChange={this.handleChange}></input>       
                    
                    <input type="submit" value="Add Property" className="button" id="submitProp"></input>
                </form>
                <div onClick={this.props.closeForm} className='formbox' id='formbox'></div>
            </div>
        );
    }
}

export default PropForm;