import React, { Component } from 'react';
import ActivityTrack from '../common/ActivityTrack';

import './index.css';

class ActivityHistory extends Component {
  render() {
    return (
      <div>
        {
          //   <p className="empty-activity">
          //   You haven't tracked any activities yet.
          // </p>
        }
        <ActivityTrack />
        <ActivityTrack />
        <ActivityTrack />
      </div>
    );
  }
}

export default ActivityHistory;
