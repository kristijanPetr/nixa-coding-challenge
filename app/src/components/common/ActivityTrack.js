import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class ActivityTrack extends Component {
  _renderHistoryCircles = () => {
    const { items = [] } = this.props;
    const track = [0, 0, 0, 0, 0, 0, 0];
    return track.map((indice, index) => {
      if (items[index]) {
        console.log('Indixe', items[index]);
        return (
          <div
            key={index}
            className="activity-logo"
            style={{ width: '60px', height: '60px', minWidth: '60px' }}
          >
            <img src={items[index].logo} />
          </div>
        );
      }
      return <div key={index} className="activity-circle" />;
    });
  };

  render() {
    console.log('props', this.props.items);
    const { month, items } = this.props;
    return (
      <div className="activity-track-container">
        <p className="activity-btn">{`${moment(month).format('MMMM')} ${moment(
          month
        ).format('DD')}`}</p>
        <p className="title" style={{ margin: 0 }}>
          {moment(month).format('dddd')}
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
