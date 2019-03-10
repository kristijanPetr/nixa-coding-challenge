import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import search_icon from '../../assets/icn_search_light.svg';
import drop_icon from '../../assets/icn_dropdown.svg';
// import { clearActivity, addHistoryActivity } from '../../actions';

import './index.css';

const activities = [
  {
    name: 'Surfing',
    logo: require('../../assets/icn_surfing.svg')
  },
  {
    name: 'Hiking',
    logo: require('../../assets/icn_hiking.svg')
  },
  {
    name: 'Weights',
    logo: require('../../assets/icn_weights.svg')
  },
  {
    name: 'Spinning',
    logo: require('../../assets/icn_spin.svg')
  }
];

class ScheduleActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.refTimePicker = false;
    this.refDatePicker = false;
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.activity) {
    }
  };

  _goBack = () => {
    this.props.history.goBack();
  };

  _renderActivityPicker = () => {
    return activities.map(item => {
      return (
        <div className="flex-center">
          <div className="activity-icon">
            <img src={item.logo} />
          </div>
          <p className="activity-btn">{item.name.toUpperCase()}</p>
        </div>
      );
    });
  };

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
          <div class="search-wrapper">
            <select
              data-placeholder=" "
              ref={input => (this.refTimePicker = input)}
            >
              <option value="" />
              <option value="">15 min</option>
              <option value="">30 min</option>
              <option value="">45 min</option>
              <option value="">1 h</option>
              <option value="">1h 30 min</option>
              <option value="">2 h</option>
              <option value="">2h 30 min</option>
              <option value="">3 h</option>
            </select>
            <button
              type="submit"
              onClick={() => {
                console.log(this.refTimePicker);
                this.refTimePicker.focus();
                this.refTimePicker.click();
              }}
            >
              <img src={search_icon} />
            </button>
          </div>
        </div>

        <div className="flex-center">
          <p className="select-title">When do you want to do this activity?</p>
          <div class="search-wrapper">
            <select data-placeholder=" ">
              <option value="" />
              <option value="">15 min</option>
              <option value="">30 min</option>
              <option value="">45 min</option>
              <option value="">1 h</option>
              <option value="">1h 30 min</option>
              <option value="">2 h</option>
              <option value="">2h 30 min</option>
              <option value="">3 h</option>
            </select>
            <button type="submit">
              <img src={drop_icon} />
            </button>
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

ScheduleActivity.propTypes = {};

export default withRouter(
  connect(
    mapStateToProps
    // { clearActivity, addHistoryActivity }
  )(ScheduleActivity)
);
