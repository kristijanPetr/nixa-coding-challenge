import React, { Component } from 'react';

class Timer extends Component {
  render() {
    const { m, s } = this.props.time;
    return (
      <div className="timer-container">
        <div className="timer-minutes">{`${m * 1}:${s}`}</div>
        --
        <p className="activity-btn"> Minutes</p>
      </div>
    );
  }
}

export default Timer;
