import React, { Component } from 'react';
import './css/App.css';
import data from './utils/data';

import Header from './components/Header'
import CardContainer from './components/CardContainer'

class App extends Component {
  render() {
    // console.log('data', data);
    return (
      <div className="App">
        <div className="App-Container">
          <Header data={data} />
          <CardContainer dates={data.dates} />
        </div>
      </div>
    );
  }
}

export default App;
