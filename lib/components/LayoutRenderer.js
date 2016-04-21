import React, { PropTypes } from 'react';
import Row from './Row';
import Columns from './Columns';

/**
 * Renders the row, column layout based on the layout provided to the dashboard.
 */
const LayoutRenderer = ({layout, widgets, onRemove, editable, onAdd, frame, rowClass, onMove, editableColumnClass, droppableColumnClass}) => {
  let rows = layout.rows.map((row, rowIndex) => {
    return (
      <Row rowClass={rowClass}>
      <Columns
        columns={row.columns}
        widgets={widgets}
        onRemove={onRemove}
        layout={layout}
        rowIndex={rowIndex}
        editable={editable}
        onAdd={onAdd}
        onMove={onMove}
        frame={frame}
        editableColumnClass={editableColumnClass}
        droppableColumnClass={droppableColumnClass}
        />
      </Row>
    );
  });

  return (
    <div>
      {rows}
    </div>
  );
};

LayoutRenderer.propTypes = {
  /**
   * Layout of the dashboard.
   */
  layout: PropTypes.object,

  /**
   * Widgets that the dashboard supports.
   */
  widgets: PropTypes.object,

  /**
   * Indicates weather this dashboard is in editable mode.
   */
  editable: PropTypes.bool,

  /**
   * Function that will be called when user removed a widget.
   */
  onRemove: PropTypes.func,

  /**
   * Function that will be called user tries to add a widget.
   */
  onAdd: PropTypes.func,

  /**
   * Frame that should be used as the outer cotnainer of the widget.
   */
  frame: PropTypes.func,

  /**
   * Class name that should be provided to the row component.
   */
  rowClass: PropTypes.string,

  onMove: PropTypes.func,

  editableColumnClass: PropTypes.string,
  droppableColumnClass: PropTypes.string,
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
