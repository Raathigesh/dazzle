import React, { PropTypes } from 'react';

const CustomAddWidgetButton = ({text, onClick}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

CustomAddWidgetButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomAddWidgetButton;
