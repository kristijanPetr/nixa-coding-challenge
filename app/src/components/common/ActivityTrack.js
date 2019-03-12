import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class ActivityTrack extends Component {
  _renderHistoryCircles = () => {
    const { items = [] } = this.props;
    const track = items.length > 7 ? items : [0, 0, 0, 0, 0, 0, 0];

    return track.map((indice, index) => {
      if (items[index]) {
        return (
          <div
            key={index}
            className="flex-center"
            style={{ marginRight: '20px' }}
          >
            <div
              className="activity-logo"
              style={{ width: '60px', height: '60px', minWidth: '60px' }}
            >
              <img src={items[index].logo} />
            </div>
            <p
              style={{
                marginTop: '9px',
                fontFamily: 'europa',
                color: '#8D8C8C',
                fontSize: '12px'
              }}
            >
              {items[index].time ? items[index].time : items[index].startTime}
            </p>
          </div>
        );
      }
      return <div key={index} className="activity-circle" />;
    });
  };

  render() {
    const { month, items = [] } = this.props;

    let timestamp = items.length > 0 ? items[0].timestamp : month;
    return (
      <div className="activity-track-container">
        <p className="activity-btn">{`${moment(timestamp).format(
          'MMMM'
        )} ${moment(timestamp).format('DD')}`}</p>
        <p className="title" style={{ margin: 0 }}>
          {moment(timestamp).format('dddd')}
        </p>
        <div className="card-list activity-track">
          {this._renderHistoryCircles()}
        </div>
      </div>
    );
  }
}

ActivityTrack.propTypes = {
  items: PropTypes.array.isRequired,
  month: PropTypes.string.isRequired
};

export default ActivityTrack;
