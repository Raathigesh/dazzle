import React, { PropTypes } from 'react';

/**
 * Represents a row in the grid system.
 */
const Row = ({ rowClass, children }) => {
  return (
    <div className={rowClass}>
      {children}
    </div>
  );
};

Row.propTypes = {
  /**
   * CSS class that should be used to represent a row.
   */
  rowClass: PropTypes.string,

  /**
   * Children of the row component.
   */
  children: PropTypes.node,
};

Row.defaultProps = {
  /**
   * Most CSS grid systems uses 'row' as the class name. Or not ?
   */
  rowClass: 'row',
};

export default Row;
