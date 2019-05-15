import React, { Component } from 'react';
import Card from './Card'

class CardContainer extends Component {
  state = { 
    expanded: false,
    performances: 4
  }

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
        <div className="more" onClick={this.toggleExpand}>
          {this.state.expanded ? (
            <span>
              View Calendar
              <span className="right-caret"> > </span>
            </span>
          ) : (
            <span>More Performances ({this.state.performances})</span>
          )}
          {!this.state.expanded && (
            <img
              className="chevron"
              src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Fchevron.svg?1555596324053"
              alt="chevron"
            />
          )}
        </div>
      </div>
    );
  }
}

export default CardContainer;