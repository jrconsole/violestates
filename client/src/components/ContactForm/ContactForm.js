import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            message: {
                name: '',
                email: '',
                content: ''
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
            message: {
                ...this.state.message, 
                [name] : value  
            }
        });
    }

    async handleSubmit(e) {    
        e.preventDefault();
        this.setState({ submitted : true });
        document.getElementById('contactForm').reset();
    }

    renderForm() {
        if (this.state.submitted) {
            return (
                <>
                    <h2>We'll get back to you ASAP!</h2>
                    <button onClick={this.props.closeForm}>Close</button>
                </>
            )
        } else {
            return (
                <form>
                    <h2>Send us a message</h2>
                    
                    <label htmlFor="contactNameInput">Name:</label>
                    <input 
                        type="text" 
                        id="contactNameInput" 
                        name="name"
                        value={this.state.message.name}
                        onChange={this.handleChange}
                        required></input>
                    <br></br>

                    <label htmlFor="contactEmailInput">email:</label>
                    <input 
                        type="text" 
                        id="contactEmailInput" 
                        name="email"
                        value={this.state.message.email}
                        onChange={this.handleChange}
                        required></input>
                    <br></br> 
                    
                    <label htmlFor="contactContentInput">Message:</label>
                    <textarea 
                        type="number" 
                        id="contactContentInput" 
                        name="content"
                        value={this.state.message.content}
                        onChange={this.handleChange}
                        required></textarea>
                    <br></br>         
                    
                    <input type="submit" value="Submit" className="button" id="submitProp"></input>
                </form>
            )
        }
    }

    render() {
        return (
            <div className = {`addProp .contactMenu`} id='contactMenu'>
                <form id='contactForm' onSubmit={this.handleSubmit}>
                    {this.renderForm()}
                </form>
                <div onClick={this.props.closeForm} className='formbox' id='formbox'></div>
            </div>
        );
    }
}

export default ContactForm;