import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../components/Main';
import CurrentActivityPage from '../screens/CurrentActivityPage';
import ScheduleActivityPage from '../screens/ScheduleActivityPage';

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Main} />
        <Route path="/activity" component={CurrentActivityPage} />
        <Route path="/schedule" component={ScheduleActivityPage} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
