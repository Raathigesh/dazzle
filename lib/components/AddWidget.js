import React from 'react';
import PropTypes from 'prop-types';

/**
 * Default AddWidget component.
 * @param  {[type]} {text    [description]
 * @param  {[type]} onClick} [description]
 * @return {[type]}          [description]
 */
const AddWidget = ({text, onClick}) => {
  return (
    <div className="add-widget-button" onClick={onClick}>
      <a className="add-widget-link">{text}</a>
    </div>
  );
};

AddWidget.propTypes = {
  /**
   * Should be called when 'add' is clicked
   */
  onClick: PropTypes.func,

  /**
   * Text that should be displyed in the component
   */
  text: PropTypes.string,
};

AddWidget.defaultProps = {
  text: 'Add Widget',
};

export default AddWidget;
