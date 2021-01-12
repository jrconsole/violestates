import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';
import { NavMenu } from '../NavMenu/NavMenu';
import ContactForm from '../ContactForm/ContactForm';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: '',
            contactFormActive: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleContactForm = this.toggleContactForm.bind(this);
    }
    
    toggleMenu(e) {
        if (this.state.displayMenu) {
            this.setState({ displayMenu: '' });
        } else {
            this.setState({ displayMenu: 'active' });
        }
    }

    toggleContactForm() {
        const newFormStatus = this.state.contactFormActive ? false:true;
        this.setState({ contactFormActive: newFormStatus })
        this.toggleMenu();
    }

    renderContactForm() {
        return this.state.contactFormActive ? <ContactForm closeForm={this.toggleContactForm}/> : null;
    }
    
    render() {
        return (
            <div>
                <nav>
                    <Link className = 'logo' id='logo' to="/">ViolEstates</Link>
                    <img 
                        onClick={this.toggleMenu} 
                        src={require("../../images/hamburger-navy.png")} 
                        id="hamburger" 
                        alt="Menu"/>
                </nav>
                <NavMenu 
                    onClick={this.toggleMenu} 
                    toggleForm={this.toggleContactForm}
                    displayMenu={this.state.displayMenu}/>

                {this.renderContactForm()}
            </div>
        )
    }
}

export default NavBar;






