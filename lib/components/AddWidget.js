import React, { PropTypes } from 'react';

const AddWidget = ({onClick}) => {
  return (
    <div className="add-widget-button" onClick={onClick}>
      <a className="add-widget-link">Add Widget</a>
    </div>
  );
};

AddWidget.propTypes = {
  /**
   * Should be called when 'add' is clicked
   */
  onClick: PropTypes.func,
};

export default AddWidget;
