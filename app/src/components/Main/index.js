import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Card from '../Card';
import ScheduledActivities from '../ScheduledActivities';
import ActivityHistory from '../ActivityHistory';

import { selectActivity, getHistoryActivities } from '../../actions';

import './App.css';

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
    const { historyActivity } = this.props;
    return (
      <div className="container">
        <Header />
        <div className="body">
          <div className="title">Track Your Activity</div>
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
              <ScheduledActivities />
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
    historyActivity: state.historyActivity
  };
};

export default connect(
  mapStateToProps,
  { selectActivity, getHistoryActivities }
)(Main);
