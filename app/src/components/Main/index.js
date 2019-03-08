import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../common/Header';
import CardList from '../CardList';
import ScheduledActivities from '../ScheduledActivities';
import ActivityHistory from '../ActivityHistory';

import { logUser } from '../../actions';

import './App.css';

class Main extends Component {
  render() {
    console.log('Props', this.props);
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
            <CardList />
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
              <ActivityHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { logUser }
)(Main);
