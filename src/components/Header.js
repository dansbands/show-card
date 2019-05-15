import React, { Component } from 'react';

class Header extends Component {
  render() {
    // console.log('header props', this.props);
    const { title, priceRange, url } = this.props.data;
    return (
      <div>
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
                {title}
                <span className="light-font"> Tickets </span>
              </h3>
              <p className="price">{priceRange}</p>
              <a href={url}>
                <img
                  src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Finfo.svg?1555596324183"
                  alt="i"
                />
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;