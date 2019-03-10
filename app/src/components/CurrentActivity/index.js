import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import { clearActivity, addHistoryActivity } from '../../actions';

import Timer from '../Timer';

import './index.css';

class CurrentActivity extends Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 0 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentWillMount() {
    if (!this.props.activity) {
      return this.props.history.replace('/');
    }
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.activity) {
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds + 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });
  }

  _goBack = () => {
    this.props.history.goBack();
    this.props.clearActivity();
  };

  _onPressPause = () => {
    clearInterval(this.timer);
    this._saveActivity();
    this._goBack();
  };

  _saveActivity = () => {
    let currDate = new Date();
    let dateFormat = moment(currDate, 'YYYY/MM/DD');

    let fullDate = dateFormat.format('MM/DD/YYYY');
    let time = dateFormat.format('HH:mm');

    const { m, s } = this.state.time;
    this.props.addHistoryActivity({
      ...this.props.activity,
      date: fullDate,
      time,
      trackedTime: `${m}:${s}`,
      timestamp: currDate.getTime()
    });
  };

  render() {
    // console.log('This props', this.props);
    const { logo, name } = this.props.activity || {};
    return (
      <div className="container-activity">
        <div className="background-img" />
        <div className="header-activity" onClick={this._goBack}>
          back
        </div>

        <div
          className="flex-center"
          style={{
            height: '170px',
            justifyContent: 'space-evenly'
          }}
        >
          <p className="activity-btn"> CURRENT ACTIVITY</p>
          <div
            className="activity-logo"
            style={{ width: '70px', height: '70px' }}
          >
            <img src={logo} />
          </div>
          <p
            style={{
              fontFamily: 'europa',
              fontWeight: '700',
              fontSize: '18px'
            }}
          >
            {name}
          </p>
        </div>
        <Timer time={this.state.time} />
        <div className="flex-center">
          <p
            style={{
              width: '186px',
              fontSize: '24px',
              fontFamily: 'europa',
              lineHeight: '1.1',
              textAlign: 'center',
              paddingBottom: '20px'
            }}
          >
            Activity Tracking in Progress...
          </p>
          <div className="pause-container" onClick={this._onPressPause}>
            <div className="pause-btn" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activity: state.activity
  };
};

CurrentActivity.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   desc: PropTypes.string.isRequired,
  //   bgImg: PropTypes.string.isRequired,
  //   logo: PropTypes.string.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    { clearActivity, addHistoryActivity }
  )(CurrentActivity)
);
