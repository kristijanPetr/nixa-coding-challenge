import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

function Page({ children, color, background, location: { state } }) {
  return <React.Fragment>{children}</React.Fragment>;
}

export default withRouter(Page);
