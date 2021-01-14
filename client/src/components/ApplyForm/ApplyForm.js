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
            },
            submitted: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    async handleSubmit(e) {    
        e.preventDefault();
        this.setState({ submitted : true });
        document.getElementById('applyForm').reset();
    }

    renderForm() {
        if (this.state.submitted) {
            return (
                <>
                    <h2>Thank you for applying!</h2>
                    <button onClick={this.props.closeForm}>Close</button>
                </>
            )
        } else {
            return (
                <>
                    <h2>Apply for this property</h2>
                    
                    <label htmlFor="applicant">Name:</label>
                    <input 
                        type="text" 
                        id="applicant" 
                        name="applicant"
                        value={this.state.application.applicant}
                        onChange={this.handleChange}
                        required></input>
                    <br></br>
                    
                    <label htmlFor="income">Monthly Income:</label>
                    <input 
                        type="number" 
                        id="income" 
                        name="income"
                        value={this.state.application.income}
                        onChange={this.handleChange}
                        required></input>
                    <br></br>
                    
                    <label htmlFor="email">email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email"
                        value={this.state.application.email}
                        onChange={this.handleChange}
                        required></input>
                    <br></br>          
                    
                    <input type="submit" value="Submit" className="button" id="submitProp"></input>
                </>
            )
        }
    }

    render() {
        return (
            <div className = {`addProp .applyMenu`} id='applyMenu'>
                <form id='applyForm' onSubmit={this.handleSubmit}>
                    {this.renderForm()}
                </form>
                <div onClick={this.props.closeForm} className='formbox' id='formbox'></div>
            </div>
        );
    }
}

export default ApplyForm;