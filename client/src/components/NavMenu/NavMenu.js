import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends React.Component {

    render() {
        return (
            <div id = "navMenu" className = {`menu ${this.props.displayMenu}`}>
                <ul >
                    <li><Link id="nav1" to="/properties">Properties</Link></li>
                    <li className="lastNav" onClick={this.props.toggleForm}>Contact</li>
                </ul>
                <div id = "menuback" onClick={this.props.onClick} className="menubox"></div>
            </div>
        )
    }
}





