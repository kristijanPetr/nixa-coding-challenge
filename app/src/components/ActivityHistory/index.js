import React, { Component } from 'react';

import './index.css';

class ScheduledActivities extends Component {
  render() {
    return (
      <div>
        <p className="empty-activity">
          You haven't tracked any activities yet.
        </p>
      </div>
    );
  }
}

export default ScheduledActivities;
