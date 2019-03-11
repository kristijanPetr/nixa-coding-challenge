import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import {
  addScheduledActivity,
  getScheduledActivitiesForDate
} from '../../actions';
import './index.css';
import './dropdown.css';
const { get7DaysRange } = require('../../utils/calculateTimeSlots');

const activities = [
  {
    name: 'Surfing',
    logo: require('../../assets/icn_surfing.svg'),
    logo_light: require('../../assets/icn_surfing_light.svg')
  },
  {
    name: 'Hiking',
    logo: require('../../assets/icn_hiking.svg'),
    logo_light: require('../../assets/icn_hiking_light.svg')
  },
  {
    name: 'Weights',
    logo: require('../../assets/icn_weights.svg'),
    logo_light: require('../../assets/icn_weights_light.svg')
  },
  {
    name: 'Spinning',
    logo: require('../../assets/icn_spin.svg'),
    logo_light: require('../../assets/icn_spin_light.svg')
  }
];

class ScheduleActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeActivityValue: false,
      dateActivityValue: false,
      activityPicked: false
    };

    this.refTimePicker = false;
    this.refDatePicker = false;
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.activity) {
    }
  };

  componentDidMount() {
    let dates = get7DaysRange();

    this.props.getScheduledActivitiesForDate(dates[0], dates[dates.length - 1]);
  }

  _goBack = () => {
    this.props.history.goBack();
  };

  _onChangeTimeActivity = value => {
    this.setState({
      timeActivityValue: value
    });
  };

  _onChangeDateActivity = value => {
    this.setState({
      dateActivityValue: value
    });
  };

  _renderActivityPicker = () => {
    return activities.map((item, index) => {
      if (item.name === this.state.activityPicked.name) {
        return (
          <div
            key={index}
            className="flex-center"
            onClick={() => this.setState({ activityPicked: item })}
          >
            <div className="activity-icon-active">
              <img src={item.logo_light} />
            </div>
            <p className="activity-btn">{item.name.toUpperCase()}</p>
          </div>
        );
      }
      return (
        <div
          key={index}
          className="flex-center"
          onClick={() => this.setState({ activityPicked: item })}
        >
          <div className="activity-icon">
            <img src={item.logo} />
          </div>
          <p className="activity-btn">{item.name.toUpperCase()}</p>
        </div>
      );
    });
  };

  _isButtonEnabled = () => {
    const { dateActivityValue, timeActivityValue, activityPicked } = this.state;
    if (
      dateActivityValue !== false &&
      timeActivityValue !== false &&
      activityPicked !== false
    ) {
      return true;
    }
    return false;
  };

  _renderTimeSlots = () => {};

  render() {
    // console.log('This props', this.props);
    const { logo, name } = this.props.activity || {};
    return (
      <div className="container-sch-activity">
        <div className="header-activity" onClick={this._goBack}>
          <ion-icon
            name="close"
            style={{ fontSize: 29, paddingLeft: '20px' }}
          />
        </div>
        <p className="activity-title"> Schedule your activity</p>

        <div className="activity-picker">{this._renderActivityPicker()}</div>

        <div
          className="flex-center"
          style={{
            marginTop: '40px',
            marginBottom: '40px'
          }}
        >
          <p className="select-title">
            How long do you want to do this activity?
          </p>

          <div className="select">
            <select
              name="slct"
              id="slct"
              onChange={item => this._onChangeTimeActivity(item.target.value)}
              value={this.state.timeActivityValue}
            >
              <option value="15">15 min</option>
              <option value="30">30 min</option>
              <option value="45">45 min</option>
              <option value="60">1 h</option>
              <option value="90">1h 30 min</option>
              <option value="120">2 h</option>
              <option value="150">2h 30 min</option>
              <option value="180">3 h</option>
            </select>
          </div>
        </div>

        <div className="flex-center">
          <p className="select-title">When do you want to do this activity?</p>
          <div className="select">
            <select
              name="slct"
              id="slct"
              onChange={item => this._onChangeDateActivity(item.target.value)}
              value={this.state.dateActivityValue}
            >
              <option>Pick a date & time or find a free slot</option>
              <option value="1">Pure CSS</option>
              <option value="2">No JS</option>
              <option value="3">Nice!</option>
              {this._renderTimeSlots()}
            </select>
          </div>
        </div>

        <div
          className={`activity-btn-wrapper btn-bottom ${
            this._isButtonEnabled() ? '' : 'disabled'
          }`}
          onClick={() => {
            if (!this._isButtonEnabled()) {
              return;
            }
          }}
        >
          <div className="activity-btn">SCHEDULE</div>
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

ScheduleActivity.propTypes = {};

export default withRouter(
  connect(
    mapStateToProps,
    { addScheduledActivity, getScheduledActivitiesForDate }
  )(ScheduleActivity)
);
