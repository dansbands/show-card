import React, { Component } from 'react';

class Card extends Component {
  
  renderButtons = times => {
    return times.map((time, idx) => {
      // console.log(time);
      
      if (time.availability) {
        const btnCls = `btn btn-${time.availability}`
        return <button key={idx} className={btnCls}>{time.time}</button>;
      } else {
        return (
          <div key={idx} className="sold-out">
            <div className="day">Sold Out</div>
            <div className="sold-out-time">{time.time}</div>
          </div>
        );
      }
    })
  }

  render() {
    // console.log('Card', this.props);

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
        <div className="card-body">
          {this.renderButtons(times)}
        </div>
      </div>
    );
  }
}

export default Card;