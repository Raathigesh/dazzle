import React, { PropTypes, createElement } from 'react';
import WidgetFrame from './WidgetFrame';

const Widgets = ({widgets, widgetTypes, onRemove, layout, columnIndex, rowIndex, editable, frame}) => {
  let createdWidgets = widgets.map((widget, index)=> {
    return (
      <WidgetFrame
        key={index}
        title={widgetTypes[widget.name].title}
        onRemove={onRemove}
        layout={layout}
        columnIndex={columnIndex}
        rowIndex={rowIndex}
        widgetIndex={index}
        editable={editable}
        frame={frame}>
        {
          createElement(widgetTypes[widget.name].type, {

          })
        }
      </WidgetFrame>
    );
  });
  return <div>{createdWidgets}</div>;
};

Widgets.propTypes = {
  /**
   * Widgets that should be rendered.
   */
  widgets: PropTypes.array,

  /**
   * Widgets that are available in the dashboard.
   */
  widgetTypes: PropTypes.object,

  /**
   * Function that should be called when a widget is about to be removed.
   */
  onRemove: PropTypes.func,

  /**
   * Layout of the dahsboard.
   */
  layout: PropTypes.object,

  /**
   * Index of the column these widgets should be placed.
   */
  columnIndex: PropTypes.number,

  /**
   * Index of the row these widgets should be placed.
   */
  rowIndex: PropTypes.number,

  /**
   * Indicates weatehr dashboard is in ediable mode or not.
   */
  editable: PropTypes.bool,

  /**
   * User provided widget frame that should be used instead of the default one.
   */
  frame: PropTypes.object,
};

export default Widgets;
