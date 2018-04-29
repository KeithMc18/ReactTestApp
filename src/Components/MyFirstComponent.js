import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class MyFirstComponent extends Component {

  _onSelect(value){
    ///call api and get all of type "value".. 
  }

  render() {
      
    const options = [
    'one', 'two', 'three'
    ]
    const defaultOption = options[0]

    return (
      <div className="App">
        <p className="App-intro">
          My first component!...
        </p>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

      </div>
    );
  }
}

export default MyFirstComponent;
