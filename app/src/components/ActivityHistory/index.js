import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import ActivityTrack from '../common/ActivityTrack';

import './index.css';

class ActivityHistory extends Component {
  _renderTracks = () => {
    const { data } = this.props;
    let grouped = _.groupBy(_.sortBy(data, 'date'), 'date');
    let items = Object.keys(grouped);
    return items.map((item, index) => {
      return <ActivityTrack key={index} items={grouped[item]} month={item} />;
    });
  };

  render() {
    const { data } = this.props;
    console.log('group');
    if (!data.length) {
      return (
        <div>
          <p className="empty-activity">
            You haven't tracked any activities yet.
          </p>
        </div>
      );
    }
    return <div>{this._renderTracks()}</div>;
  }
}

export default ActivityHistory;
