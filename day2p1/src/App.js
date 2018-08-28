import React, { Component } from 'react';
import './App.css';
import Netflix from "./Netflix";


class App extends Component {
  render() {
    return (
      <div className="App">
          <div>{Netflix}</div>);
      </div>
    );
  }
  
}

export default App;
