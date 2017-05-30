import React from 'react';
import PropTypes from 'prop-types';

const CustomAddWidgetButton = ({ text, onClick }) => (
  <div>
    <button onClick={onClick}>{text}</button>
  </div>
);

CustomAddWidgetButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomAddWidgetButton;
