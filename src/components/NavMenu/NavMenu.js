import React from 'react';
import './NavMenu.css';

export class NavMenu extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
            <div id = "navMenu" className = {`menu ${this.props.displayMenu}`}>
                <ul >
                    <li><a id="nav1" href="./properties.html">Properties</a></li>
                    <li><a id="nav2" href="#artist">Apply</a></li>
                    <li className="lastNav"><a id="nav3" href="#request">Contact</a></li>
                </ul>
                <div id = "menuback" onClick={this.props.onClick} className="menubox"></div>
            </div>
        )
    }
}





