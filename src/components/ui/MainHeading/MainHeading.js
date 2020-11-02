import React from 'react';

import './MainHeading.scss';

const MainHeading = props => {
  return (
    <h2 className="heading" style={props.styles}>{props.children}</h2>
  );
};

export default MainHeading;