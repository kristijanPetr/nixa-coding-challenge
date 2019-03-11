import React, { Component } from 'react';

class Timer extends Component {
  render() {
    // const { h, m, s } = this.props.time;
    return (
      <div className="timer-container">
        {
          //   <div className="timer-minutes">{`${h * 1}:${m}`}</div>
        }
        <div className="timer-minutes">{this.props.time}</div>
        --
        <p className="activity-btn"> Minutes</p>
      </div>
    );
  }
}

export default Timer;
