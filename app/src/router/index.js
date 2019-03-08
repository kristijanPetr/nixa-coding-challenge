import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../components/Main';
import About from '../screens/About';

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
