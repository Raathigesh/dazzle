import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import { WIDGET } from './ItemTypes';
import AddWidget from './AddWidget';

const boxTarget = {
  drop(props, monitor) {
    const { layout, rowIndex, columnIndex, onMove} = this.props;
    props.onDrop(layout, monitor.getItem(), rowIndex, columnIndex, onMove);
  },
};

/**
 * Colum of the dashboard grid. A column holds multiple widgets.
 */
@DropTarget(WIDGET, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
class Column extends Component {
  render() {
    const {
      className,
      layout,
      rowIndex,
      columnIndex,
      editable,
      children,
      connectDropTarget,
      onAdd,
      isOver,
      canDrop,
      editableColumnClass,
      droppableColumnClass,
    } = this.props;

    let classes = className;
    classes = editable ? `${className} ${editableColumnClass}` : classes;
    const isActive = isOver && canDrop;
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

  /**
   * Indicates weather a widget is being draged over.
   */
  isOver: PropTypes.bool,

  /**
   * Indicated a widget can be dropped.
   */
  canDrop: PropTypes.bool,

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass: PropTypes.string,

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass: PropTypes.string,

  /**
   * ReactDnd's connectDropTarget.
   */
  connectDropTarget: PropTypes.func,
};

Column.defaultProps  = {
  editableColumnClass: 'editable-column',
  droppableColumnClass: 'droppable-column',
};

export default Column;
