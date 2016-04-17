import React, { PropTypes } from 'react';
import Column from './Column';
import Widgets from './Widgets';

/**
 * Returns a set of columns that belongs to a row.
 */
function Columns({columns, widgets, onRemove, layout, rowIndex, editable, onAdd, frame}) {
  const items = columns.map((column, index) => {
    return (
      <Column  key={index} className={column.className} onAdd={onAdd} layout={layout} rowIndex={rowIndex} columnIndex={index} editable={editable}>
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
};

export default Columns;
