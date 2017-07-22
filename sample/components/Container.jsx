import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="container body">
    <div className="main_container">
      {children}
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.array,
};

export default Container;
