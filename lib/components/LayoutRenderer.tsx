import * as React from 'react';
import { ILayoutRendererProps, ReactStateless } from "../models";
import Row from './Row';

/**
 * Renders the row, column layout based on the layout provided to the dashboard.
 */
const LayoutRenderer: ReactStateless<ILayoutRendererProps> = (props) => {
  const {
    layout,
    widgets,
    onRemove,
    editable,
    onAdd,
    frameComponent,
    rowClass,
    onMove,
    editableColumnClass,
    droppableColumnClass,
    addWidgetComponentText,
    addWidgetComponent,
  } = props;

  let rows = layout.rows.map((row, rowIndex) => {
    return (
      <Row
        key={rowIndex}
        rowClass={rowClass}
        columns={row.columns}
        widgets={widgets}
        onRemove={onRemove}
        layout={layout}
        rowIndex={rowIndex}
        editable={editable}
        onAdd={onAdd}
        onMove={onMove}
        frameComponent={frameComponent}
        editableColumnClass={editableColumnClass}
        droppableColumnClass={droppableColumnClass}
        addWidgetComponentText={addWidgetComponentText}
        addWidgetComponent={addWidgetComponent}
        />
    );
  });

  return (
    <div>
      {rows}
    </div>
  );
};

LayoutRenderer.defaultProps = {
  /**
   * Default layout.
   */
  layout: {
    rows: [],
  },
};

export default LayoutRenderer;
