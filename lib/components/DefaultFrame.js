import React, { PropTypes } from 'react';

/**
 * Default frame that will be used with the widgets.
 */
const DefaultFrame = ({children, onRemove, editable}) => {
  return (
    <div className="defaultWidgetFrame">
      <div className="defaultWidgetFrameHeader">
        <span className="title">Visitors location</span>
        {editable && <a  className="remove" onClick={() => {onRemove();}}>Remove</a>}
      </div>
      {children}
    </div>
  );
};

DefaultFrame.propTypes = {
  /**
   * Indicates weather the dashboard is in editable mode.
   */
  editable: PropTypes.bool,

  /**
   * Children of the frame.
   */
  children: PropTypes.array,

  /**
   * Function to call when the widget is removed.
   */
  onRemove: PropTypes.func,
};

export default DefaultFrame;
