import React, { Component } from 'react';
import Card from './Card'

class CardContainer extends Component {
  state = { expanded: false }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  renderCards = () => {
    let { dates } = this.props;
    dates = this.state.expanded ? dates : dates.slice(0, 3); 
    // let lessDates = this.props.
    console.log(dates);
    
    return dates.map((date, idx) => {
      return <Card key={idx} date={date} />
    })
  }

  render() {
    // console.log('CardContainer props', this.props);
    
    return (
      <div>

        {this.renderCards()}
        <div 
          className="more" 
          onClick={this.toggleExpand}>
          More Performances
        </div>
      </div>
    );
  }
}

export default CardContainer;