import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Container">
          <div className="header">
            <div className="header-left">
              <img
                src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Fposter.jpg?1555596324072"
                alt="poster"
                width="65px"
              />
            </div>
            <div className="header-center">
              <h3>
                The Phantom of the Opera
                <span className="light-font"> Tickets </span>
              </h3>
              <p className="price">$29.00 - $215.00</p>
              <a href="#">
                <img
                  src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Finfo.svg?1555596324183"
                  alt="i"
                />
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
