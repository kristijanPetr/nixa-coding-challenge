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
    this.state = {
      seconds: 11200,
      time: new moment().format('HH:mm'),
      startTime: ''
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
  }

  componentWillMount() {
    if (!this.props.activity) {
      return this.props.history.replace('/');
    }
  }

  momentCounter = () => {
    let endTime = new moment();
    let duration = moment.duration(endTime.diff(this.state.startTime));

    this.setState({
      time: `${duration.minutes().toFixed(0)}:${duration.seconds().toFixed(0)}`
    });
  };

  componentDidMount() {
    this.setState(
      {
        startTime: new moment()
      },
      () => this.momentCounter()
    );

    this.startTimer();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.activity) {
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.momentCounter, 1000);
    }
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
    this.props.addHistoryActivity({
      ...this.props.activity,
      date: fullDate,
      time: this.state.startTime.format('HH:mm'),
      trackedTime: this.state.time,
      timestamp: currDate.getTime()
    });
  };

  render() {
    const { logo, name } = this.props.activity || {};
    return (
      <div className="container-activity">
        <div className="background-img" />
        <div className="header-activity" onClick={this._goBack}>
          <ion-icon
            name="ios-arrow-back"
            style={{ color: 'white', fontSize: 29 }}
          />
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
