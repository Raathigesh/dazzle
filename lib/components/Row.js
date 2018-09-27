import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';
import Widgets from './Widgets';

/**
 * Returns a set of columns that belongs to a row.
 */
function Row(props) {
  const {
    rowClass,
    columns,
    widgets,
    onRemove,
    layout,
    rowIndex,
    editable,
    frameComponent,
    editableColumnClass,
    droppableColumnClass,
    addWidgetComponentText,
    addWidgetComponent,
    onAdd,
    onMove,
    onEdit,
  } = props;

  const items = columns.map((column, index) => { // eslint-disable-line arrow-body-style
    return (
      <Column
        key={index}
        className={column.className}
        onAdd={onAdd}
        layout={layout}
        rowIndex={rowIndex}
        columnIndex={index}
        editable={editable}
        onMove={onMove}
        editableColumnClass={editableColumnClass}
        droppableColumnClass={droppableColumnClass}
        addWidgetComponent={addWidgetComponent}
        addWidgetComponentText={addWidgetComponentText}
      >
        <Widgets
          key={index}
          widgets={column.widgets}
          containerClassName={column.containerClassName}
          widgetTypes={widgets}
          onRemove={onRemove}
          layout={layout}
          rowIndex={rowIndex}
          columnIndex={index}
          editable={editable}
          frameComponent={frameComponent}
          onMove={onMove}
          onEdit={onEdit}
        />
      </Column>
    );
  });

  return (
    <div className={rowClass}>
      {items}
    </div>
  );
}

Row.propTypes = {
  /**
   * CSS class that should be used to represent a row.
   */
  rowClass: PropTypes.string,

  /**
   * Columns of the layout.
   */
  columns: PropTypes.array,

  /**
   * Widgets that should be used in the dashboard.
   */
  widgets: PropTypes.object,

  /**
   * Layout of the dashboard.
   */
  layout: PropTypes.object,

  /**
   * Index of the row where this column is in.
   */
  rowIndex: PropTypes.number,

  /**
   * Indicates weather the dashboard is in editable mode or not.
   */
  editable: PropTypes.bool,

  /**
   * Custom frame that should be used with the widget.
   */
  frameComponent: PropTypes.func,

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass: PropTypes.string,

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass: PropTypes.string,

  /**
   * Custom AddWidget component.
   */
  addWidgetComponent: PropTypes.func,

  /**
   * Text that should be displyed in the AddWidget component.
   */
  addWidgetComponentText: PropTypes.string,

  /**
   * Method that should be called when a component is added.
   */
  onAdd: PropTypes.func,

  /**
   * Method that should be called when a component is removed.
   */
  onRemove: PropTypes.func,

  /**
   * Method that should be called when a widget is moved.
   */
  onMove: PropTypes.func,
  onEdit: PropTypes.func,
};

Row.defaultProps = {
  /**
   * Most CSS grid systems uses 'row' as the class name. Or not ?
   */
  rowClass: 'row',
};

export default Row;
