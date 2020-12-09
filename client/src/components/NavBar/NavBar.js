import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';
import { NavMenu } from '../NavMenu/NavMenu'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: ''
        }
        this.handleClick = this.handleClick.bind(this);
        
    }
    
    handleClick(e) {
        if (this.state.displayMenu) {
            this.setState({ displayMenu: '' });
        } else {
            this.setState({ displayMenu: 'active' });
        }
    }
    
    render() {
        return (
            <div>
                <nav>
                    <Link className = 'logo' id='logo' to="/">ViolEstates</Link>
                    <img 
                        onClick={this.handleClick} 
                        src={require("../../images/hamburger-navy.png")} 
                        id="hamburger" 
                        alt="Menu"/>
                </nav>
                <NavMenu 
                    onClick={this.handleClick} 
                    displayMenu={this.state.displayMenu}/>
            </div>
        )
    }
}

export default NavBar;






