import React, { Component } from 'react';

import Note from './components/Note';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Note />
      </div>
    );
  }
}

export default App;
