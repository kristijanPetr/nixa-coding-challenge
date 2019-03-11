import React, { Component } from 'react';
import _ from 'lodash';
import icn_plus from '../../assets/icn_plus.svg';
import { withRouter } from 'react-router-dom';
import './index.css';
import ActivityTrack from '../common/ActivityTrack';

class ScheduledActivities extends Component {
  _renderTracks = () => {
    const { data } = this.props;
    let grouped = _.groupBy(_.sortBy(data, 'date'), 'date');
    let items = Object.keys(grouped);
    return items.map((item, index) => {
      return <ActivityTrack key={index} items={grouped[item]} month={item} />;
    });
  };

  _renderEmptyTrack() {
    return (
      <p className="empty-activity">
        You don't have any activities scheduled yet.
      </p>
    );
  }

  render() {
    console.log('Prop', this.props);
    const { data = [] } = this.props;
    return (
      <div>
        {!data.length ? this._renderEmptyTrack() : this._renderTracks()}

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
