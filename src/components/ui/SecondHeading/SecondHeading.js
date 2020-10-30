import React from 'react';

import './SecondHeading.scss';

const SecondHeading = props => {
  return (
    <h3 className="heading--small" style={props.styles}>{props.children}</h3>
  );
};

export default SecondHeading;