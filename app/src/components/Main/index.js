import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Card from '../Card';
import ScheduledActivities from '../ScheduledActivities';
import ActivityHistory from '../ActivityHistory';

import {
  selectActivity,
  getHistoryActivities,
  getScheduledActivitiesForDate
} from '../../actions';

import './App.css';
const { get7DaysRange } = require('../../utils/calculateTimeSlots');
const activities = [
  {
    name: 'Surfing',
    desc: 'OCEAN BEACH',
    bgImg: require('../../assets/surfing@2x.png'),
    logo: require('../../assets/icn_surfing.svg')
  },
  {
    name: 'Hiking',
    desc: 'TORREY PINES',
    bgImg: require('../../assets/hiking@2x.png'),
    logo: require('../../assets/icn_hiking.svg')
  },
  {
    name: 'Weights',
    desc: 'HEAVY WEIGHTS',
    bgImg: require('../../assets/weights@2x.png'),
    logo: require('../../assets/icn_weights.svg')
  },
  {
    name: 'Spinning',
    desc: 'ROUND AND ROUND',
    bgImg: require('../../assets/spinning@2x.png'),
    logo: require('../../assets/icn_spin.svg')
  }
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getHistoryActivities();
    let dates = get7DaysRange();

    this.props.getScheduledActivitiesForDate(
      dates[0].timestamp,
      dates[dates.length - 1].timestamp
    );
  }

  _selectActivity = activity => {
    this.props.selectActivity(activity);
    this.props.history.push('/activity', {});
  };

  _renderActivityCards = () => {
    return activities.map((item, index) => {
      const { name, desc, bgImg, logo } = item;
      return (
        <Card
          key={index}
          onClick={() => this._selectActivity(item)}
          name={name}
          desc={desc}
          bgImg={bgImg}
          logo={logo}
        />
      );
    });
  };

  render() {
    const { historyActivity, scheduledActivities } = this.props;
    return (
      <div className="container">
        <Header />
        <div className="body">
          <div
            className="title"
            style={{
              paddingLeft: '20px'
            }}
          >
            Track Your Activity
          </div>
          <div
            style={{
              width: '100%'
            }}
          >
            <section className="card-list">
              {this._renderActivityCards()}
            </section>
          </div>
          <div className="scheduled-activity">
            <div
              style={{
                padding: '20px'
              }}
            >
              <div className="title">Scheduled Activities</div>
              <ScheduledActivities data={scheduledActivities} />
            </div>
          </div>

          <div className="activity-history">
            <div
              style={{
                padding: '20px'
              }}
            >
              <div className="title">Activity History</div>
              <ActivityHistory data={historyActivity} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    historyActivity: state.historyActivity,
    scheduledActivities: state.scheduledActivity
  };
};

export default connect(
  mapStateToProps,
  { selectActivity, getHistoryActivities, getScheduledActivitiesForDate }
)(Main);
