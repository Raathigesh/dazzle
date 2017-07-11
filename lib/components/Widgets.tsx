import * as React from 'react';
import { PropTypes, createElement, ComponentClass } from 'react';
import { IWidgetsProps, ReactStateless } from "../models";
import WidgetFrame from './WidgetFrame';

/**
 * Component that renders the widget which belongs to a column.
 */
const Widgets: ReactStateless<IWidgetsProps> = ({widgets, widgetTypes, onRemove, layout, columnIndex, rowIndex, editable, frameComponent, onMove}) => {
  let createdWidgets = widgets.map((widget, index)=> {
    return (
      <WidgetFrame
        key={index}
        widgetName={widget.key}
        title={widgetTypes[widget.key].title}
        onRemove={onRemove}
        layout={layout}
        columnIndex={columnIndex}
        rowIndex={rowIndex}
        widgetIndex={index}
        editable={editable}
        frameComponent={frameComponent}
        onMove={onMove}
      >
        {
          createElement(widgetTypes[widget.key].type as ComponentClass<any>, widgetTypes[widget.key].props)
        }
      </WidgetFrame>
    );
  });
  return <div>{createdWidgets}</div>;
};



export default Widgets;
