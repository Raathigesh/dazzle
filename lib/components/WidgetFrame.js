import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import { WIDGET } from './ItemTypes';
import { removeWidget, sortWidget } from '../util';
import DefaultFrame from './DefaultFrame';

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
class WidgetFrame  extends Component {
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

WidgetFrame.propTypes = {
  /**
   * Childrens of the widget frame.
   */
  children: PropTypes.element,


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
   * Index of the widget.
   */
  widgetIndex: PropTypes.number,

  /**
   * Indicates weatehr dashboard is in ediable mode or not.
   */
  editable: PropTypes.bool,

  /**
   * User provided widget frame that should be used instead of the default one.
   */
  frameComponent: PropTypes.func,

  /**
   * Name of the widget.
   */
  widgetName: PropTypes.string,

  /**
   * Title of the widget.
   */
  title: PropTypes.string,

  /**
   * Weather the component is being dragged.
   */
  isDragging: PropTypes.bool,

  /**
   * ReactDnd's connectDragSource().
   */
  connectDragSource: PropTypes.func,

/**
 * ReactDnd's connectDropTarget().
 */
  connectDropTarget: PropTypes.func,

  /**
   * Function that should be called when a widget is about to be removed.
   */
  onRemove: PropTypes.func,
};

export default WidgetFrame;
