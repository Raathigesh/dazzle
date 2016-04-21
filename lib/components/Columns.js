import React, { PropTypes } from 'react';
import Column from './Column';
import Widgets from './Widgets';
import { moveWidget } from '../util';

function handleDrop(layout, item, droppedRowIndex, droppedColumnIndex, onMove) {
  const movedLayout = moveWidget(layout, {
    rowIndex: item.rowIndex,
    columnIndex: item.columnIndex,
    widgetIndex: item.widgetIndex,
  }, {
    rowIndex: droppedRowIndex,
    columnIndex: droppedColumnIndex,
  }, item.widgetName);

  onMove(movedLayout);
}

/**
 * Returns a set of columns that belongs to a row.
 */
function Columns({columns, widgets, onRemove, layout, rowIndex, editable, onAdd, frame, editableColumnClass, droppableColumnClass, onMove}) {
  const items = columns.map((column, index) => {
    return (
      <Column
        key={index}
        className={column.className}
        onAdd={onAdd}
        layout={layout}
        rowIndex={rowIndex}
        columnIndex={index}
        editable={editable}
        onDrop={handleDrop}
        onMove={onMove}
        editableColumnClass={editableColumnClass}
        droppableColumnClass={droppableColumnClass}
      >
        <Widgets
          key={index}
          widgets={column.widgets}
          widgetTypes={widgets}
          onRemove={onRemove}
          layout={layout}
          rowIndex={rowIndex}
          columnIndex={index}
          editable= {editable}
          frame = {frame}
        />
      </Column>
    );
  });

  return <div>{items}</div>;
}

Columns.propTypes = {
  columns: PropTypes.array,
  widgets: PropTypes.object,
  onRemove: PropTypes.func,
  layout: PropTypes.object,
  rowIndex: PropTypes.number,
  editable: PropTypes.bool,
  onAdd: PropTypes.func,
  frame: PropTypes.func,
  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass: PropTypes.string,

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass: PropTypes.string,
  onMove: PropTypes.func,
};

export default Columns;
