import React, { Component } from 'react';

class ActivityTrack extends Component {
  render() {
    return (
      <div className="activity-track-container">
        <p className="activity-btn">September 3</p>
        <p className="title" style={{ margin: 0 }}>
          Monday
        </p>
        <div className="card-list activity-track">
          <div className="activity-circle" />
          <div className="activity-circle" />
          <div className="activity-circle" />
          <div className="activity-circle" />
          <div className="activity-circle" />
          <div className="activity-circle" />
          <div className="activity-circle" />
        </div>
      </div>
    );
  }
}

export default ActivityTrack;
