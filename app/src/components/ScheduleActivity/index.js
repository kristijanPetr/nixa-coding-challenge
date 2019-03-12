import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import {
  addScheduledActivity,
  getScheduledActivitiesForDate
} from '../../actions';
import './index.css';
import './dropdown.css';
const {
  get7DaysRange,
  findFreeSpots
} = require('../../utils/calculateTimeSlots');

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
      timeActivityValue: 15,
      dateActivityValue: false,
      activityPicked: false,
      dateRange: []
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

    this.props.getScheduledActivitiesForDate(
      dates[0].timestamp,
      dates[dates.length - 1].timestamp
    );

    this.setState({
      dateRange: dates.map(item => item.date)
    });
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
    console.log('change picker val', moment(value).format('MM/DD'));
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

  _renderTimeSlots = () => {
    let allSpots = [];
    let dateGrouped = _.groupBy(this.props.scheduledActivities, 'date');
    let keys = [...this.state.dateRange];

    keys.map(key => {
      let spots = findFreeSpots(
        _.sortBy(dateGrouped[key], 'timestamp') || [],
        this.state.timeActivityValue
      );
      // console.log('Spots', spots);
      // console.log(moment(key).format('ddd DD MMM'));

      spots.map(spot => {
        allSpots.push(`${moment(key).format('ddd DD MMM')} ${spot}`);
      });
    });
    // console.log('All spots', allSpots);
    return allSpots.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
  };

  _onSubmitForm = () => {
    console.log('data to submit', this.state);
    const {
      activityPicked: { name, logo },
      dateActivityValue,
      timeActivityValue
    } = this.state;
    let date =
      moment(dateActivityValue).format('MM/DD/') + moment().format('YYYY');

    let formData = {
      name,
      logo,
      date,
      startTime: moment(dateActivityValue).format('HH:mm'),
      endTime: moment(dateActivityValue)
        .add(timeActivityValue, 'minutes')
        .format('HH:mm'),
      timestamp: moment(date).unix() * 1000
    };
    console.log('formData', formData);
    this.props.addScheduledActivity(formData);

    this._goBack();
  };

  render() {
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
            this._onSubmitForm();
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
    activity: state.activity,
    scheduledActivities: state.scheduledActivity
  };
};

ScheduleActivity.propTypes = {};

export default withRouter(
  connect(
    mapStateToProps,
    { addScheduledActivity, getScheduledActivitiesForDate }
  )(ScheduleActivity)
);
