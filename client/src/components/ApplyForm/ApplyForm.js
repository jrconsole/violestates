import React from 'react';
import './ApplyForm.css';

class ApplyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            application: {
                applicant: '',
                income: '',
                email: ''
            }
        }
        
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ 
            application: {
                ...this.state.application, 
                [name] : value  
            }
        });
    }

    // async handleSubmit(e) {    
    //     e.preventDefault();
    //     const newId = await this.props.addProperty(this.state.newProperty);
    //     this.props.closeForm();
    //     document.getElementById('addPropForm').reset();
    //     window.location.href = `/properties/${newId}`;
    // }

    render() {
        return (
            <div className = {`addProp .applyMenu`} id='applyMenu'>
                <form id='addPropForm' onSubmit={this.handleSubmit}>
                    <h2>Apply for this property</h2>
                    
                    <label htmlFor="applicant">Name:</label>
                    <input 
                        type="text" 
                        id="applicant" 
                        name="applicant"
                        value={this.state.application.applicant}
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label htmlFor="income">Monthly Income:</label>
                    <input 
                        type="text" 
                        id="income" 
                        name="income"
                        value={this.state.application.income}
                        onChange={this.handleChange}></input>
                    <br></br>
                    
                    <label htmlFor="email">email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email"
                        value={this.state.application.email}
                        onChange={this.handleChange}></input>
                    <br></br>          
                    
                    <input type="submit" value="Add Property" className="button" id="submitProp"></input>
                </form>
                <div onClick={this.props.closeForm} className='formbox' id='formbox'></div>
            </div>
        );
    }
}

export default ApplyForm;