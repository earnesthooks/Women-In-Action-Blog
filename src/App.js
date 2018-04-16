import React, { Component } from 'react';
import logo from './wiac2018.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <center><div className="App">
        <div className="App-header">
          {/* <h2>Women In Action 2018</h2> */}
          <img className="" src={logo} width="400" alt="WIAC 2018"/>
        </div>
        <div>
          {this.props.children}
        </div>
      </div></center>
    );
  }
}

export default App;
