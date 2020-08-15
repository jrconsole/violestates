import React from 'react';
import './PropInput.css'

class PropInput extends React.Component {
    

    render() {
        return(
            <div className="formInput">
                <label for={this.props.inputName}>{this.props.inputName}:</label>
                <input 
                    type="text" 
                    id={this.props.inputName} 
                    name={this.props.inputName}
                    value={this.props.inputValue}
                    onChange={this.props.onChange}></input>
                <br></br>
            </div>
        );
    }
}

export default PropInput;

