import React, { Component } from 'react';

class Card extends Component {
  
  render() {
    console.log('Card', this.props);

    const { day, date, times } = this.props.date;

    return (
      <div className="card">
        <div className="card-left">
          <div className="day">
            {day}
          </div>
          <div>
            {date}
          </div>
        </div>
        <div className="card-body"></div>
      </div>
    );
  }
}

export default Card;