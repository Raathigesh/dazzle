import * as React from 'react';
import { IRowProps, ReactStateless } from "../models";
import Column from './Column';
import Widgets from './Widgets';

/**
 * Returns a set of columns that belongs to a row.
 */
const Row: ReactStateless<IRowProps> = (props) => {
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
  } = props;

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
        onMove={onMove}
        editableColumnClass={editableColumnClass}
        droppableColumnClass={droppableColumnClass}
        addWidgetComponent={addWidgetComponent}
        addWidgetComponentText={addWidgetComponentText}
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
          frameComponent = {frameComponent}
          onMove={onMove}
        />
      </Column>
    );
  });
  let rowClassValue = rowClass || "row";
  return (
    <div className={rowClass}>
      {items}
    </div>
  );
}

export default Row;
