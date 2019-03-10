import React, { Component } from 'react';
import icn_plus from '../../assets/icn_plus.svg';
import { withRouter } from 'react-router-dom';
import './index.css';

class ScheduledActivities extends Component {
  render() {
    return (
      <div>
        <p className="empty-activity">
          You don't have any activities scheduled yet.
        </p>

        <div
          className="activity-btn-wrapper"
          onClick={() => this.props.history.push('/schedule', {})}
        >
          <img src={icn_plus} />
          <div className="activity-btn">SCHEDULE ACTIVITY</div>
        </div>
      </div>
    );
  }
}

export default withRouter(ScheduledActivities);
