import React from 'react';
import './PropForm.css';

class PropForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            newProperty: {
                price: '',
                numBed: '',
                numBath: '',
                name: '',
                address: '',
                city: ''
            }
        }
        
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name] : value })
    }

    handleSubmit() {

    }

    render() {
        return (
            <div className = {`addProp ${this.props.displayForm} .addPropMenu`} id='addPropMenu'>
                <form id='addPropForm'>
                    <h2>Create a Property</h2>
                    
                    <label for="price">Monthly Rent:</label>
                    <input 
                        type="text" 
                        id="price" 
                        name="price"
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label for="numBed">Number of Bedrooms:</label>
                    <input 
                        type="text" 
                        id="numBed" 
                        name="numBed"
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label for="numBath">Number of Bathrooms:</label>
                    <input 
                        type="text" 
                        id="numBath" 
                        name="numBath"
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label for="propName">Property Name:</label>
                    <input 
                        type="text" 
                        id="propName" 
                        name="propName"
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label for="address">Address:</label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address"
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label for="city">City:</label>
                    <input 
                        type="text" 
                        id="city" 
                        name="city"
                        onChange={this.handleChange}></input>       
                    
                    <input type="button" value="Add Property" class="button" id="submitProp"></input>
                </form>
                <div onClick={this.props.closeForm} className='formbox' id='formbox'></div>
            </div>
        );
    }
}

export default PropForm;