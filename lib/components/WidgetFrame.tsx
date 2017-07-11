import * as React from 'react';
import { Component, PropTypes, createElement } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import { WIDGET } from './ItemTypes';
import { removeWidget, sortWidget } from '../util';
import DefaultFrame from './DefaultFrame';
import { ReactStateless, IWidgetFrame } from '../models';

const boxSource = {
  beginDrag(props) {
    return {
      widgetName: props.widgetName,
      rowIndex: props.rowIndex,
      columnIndex: props.columnIndex,
      widgetIndex: props.widgetIndex,
    };
  },

  canDrag(props) {
    return props.editable;
  },
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().widgetIndex;
    const hoverIndex = props.widgetIndex;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    const { layout, columnIndex, rowIndex } = props;

    if (monitor.getItem().columnIndex === columnIndex) {
      const newLayout = sortWidget(layout, {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        widgetIndex: dragIndex,
      }, {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        widgetIndex: hoverIndex,
      },  monitor.getItem().widgetName);

      props.onMove(newLayout);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().widgetIndex = hoverIndex;
    }
  },
};

/**
 * Frame component which surrounds each widget.
 */
 @DropTarget(WIDGET, cardTarget, connect => ({
   connectDropTarget: connect.dropTarget(),
 }))
 @DragSource(WIDGET, boxSource, (connect, monitor) => ({
   connectDragSource: connect.dragSource(),
   isDragging: monitor.isDragging(),
 }))
class WidgetFrame extends Component<IWidgetFrame, {}> {
  static DecoratedComponent: any;
  render() {
    const {
      frameComponent,
      children,
      editable,
      title,
      connectDragSource,
      connectDropTarget,
      isDragging,
    } = this.props;

    let selected = null;

    if (frameComponent) {
      // if user provided a custom frame,  use it
      selected = createElement(frameComponent, {	children,	editable, title, onRemove: this.remove });
    } else {
      // else use the default frame
      selected = (
        <DefaultFrame
          title={title}
          editable={editable}
          children={children}
          onRemove={this.remove}
        />
      );
    }
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(connectDropTarget(
      <div style={{ opacity }}>
        {selected}
      </div>
    ));
  }

  remove = () => {
    const { layout, rowIndex, columnIndex, widgetIndex } = this.props;
    const newLayout = removeWidget(layout, rowIndex, columnIndex,  widgetIndex);
    this.props.onRemove(newLayout);
  }
}


export default WidgetFrame;
