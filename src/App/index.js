import React, { Component } from 'react';
import './App.css';

//import Paras from '../components/Paras'
import ParseHTML from '../components/ParseHTML';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ParseHTML />
      </div>
    );
  }
}

export default App;
