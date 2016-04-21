import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import AddWidget from './AddWidget';

const boxTarget = {
  drop(props, monitor) {
    props.onDrop(props.layout, monitor.getItem(), props.rowIndex, props.columnIndex, props.onMove);
  },
};

/**
 * Colum of the dashboard grid. A column holds multiple widgets.
 */

@DropTarget('BOX', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
class Column extends React.Component {
  render() {
    const { className, layout, rowIndex, columnIndex, editable, children, connectDropTarget, onAdd, isOver, canDrop, editableColumnClass, droppableColumnClass } = this.props;
    const isActive = isOver && canDrop;
    let classes = className;
    classes = editable ? `${className} ${editableColumnClass}` : classes;
    classes = isActive ? `${classes} ${droppableColumnClass}` : classes;
    return (
      connectDropTarget(
        <div className={classes}>
          {editable && <AddWidget onClick={() => {onAdd(layout, rowIndex, columnIndex);}}/>}
          { children }
        </div>
      )
    );
  }
}

Column.propTypes = {
  /**
   * Children of the column
   */
  children: PropTypes.node,

  /**
   * CSS class that should be used with the column.
   */
  className: PropTypes.string,

  /**
   * Function that should be called when user tries to add a widget
   * to the column.
   */
  onAdd: PropTypes.func,

  /**
   * Layout of the dashboard.
   */
  layout: PropTypes.object,

  /**
   * Index of the row that this column resides.
   */
  rowIndex: PropTypes.number,

  /**
   * Index of this column.
   */
  columnIndex: PropTypes.number,

  /**
   * Indicates weather dashboard is in editable state
   */
  editable: PropTypes.bool,

  connectDropTarget: PropTypes.func,

  isOver: PropTypes.bool,

  canDrop: PropTypes.bool,

  editableColumnClass: PropTypes.string,
  droppableColumnClass: PropTypes.string,
};

Column.defaultProps  = {
  editableColumnClass: 'editable-column',
  droppableColumnClass: 'droppable-column',
};

export default Column;
