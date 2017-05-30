import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { WIDGET } from './ItemTypes';
import AddWidget from './AddWidget';
import { moveWidget } from '../util';

const columnTarget = {
  drop(props, monitor) {
    const { layout, rowIndex, columnIndex, onMove} = props;
    const item = monitor.getItem();
    if (item.columnIndex !== columnIndex || item.rowIndex !== rowIndex) {
      const movedLayout = moveWidget(layout, {
        rowIndex: item.rowIndex,
        columnIndex: item.columnIndex,
        widgetIndex: item.widgetIndex,
      }, {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
      }, item.widgetName);
      onMove(movedLayout);
    }
  },
};

/**
 * Colum of the dashboard grid. A column holds multiple widgets.
 */
@DropTarget(WIDGET, columnTarget, (connect, monitor) => ({
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
      addWidgetComponentText,
      addWidgetComponent,
    } = this.props;

    let classes = className;
    classes = editable ? `${className} ${editableColumnClass}` : classes;
    const isActive = isOver && canDrop;
    classes = isActive ? `${classes} ${droppableColumnClass}` : classes;

    let addWidgetComponentToUse = null;
    if (addWidgetComponent) {
      addWidgetComponentToUse = createElement(addWidgetComponent, {	text: addWidgetComponentText, onClick:	() => {onAdd(layout, rowIndex, columnIndex);} });
    } else {
      addWidgetComponentToUse = <AddWidget text={addWidgetComponentText} onClick={() => {onAdd(layout, rowIndex, columnIndex);}}/>;
    }

    return (
      connectDropTarget(
        <div className={classes}>
          {editable && addWidgetComponentToUse}
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
   * Text that should be given to the AddWidget component.
   */
  addWidgetComponentText: PropTypes.string,

  /**
   * ReactDnd's connectDropTarget.
   */
  connectDropTarget: PropTypes.func,

  /**
   * Customized AddWidget component.
   */
  addWidgetComponent: PropTypes.func,
};

Column.defaultProps  = {
  editableColumnClass: 'editable-column',
  droppableColumnClass: 'droppable-column',
};

export default Column;
