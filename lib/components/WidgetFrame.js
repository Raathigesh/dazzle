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
};

const cardTarget = {
  drop(props, monitor, component) {
    const dragIndex = monitor.getItem().widgetIndex;
    const dropIndex = props.widgetIndex;

    // Don't replace items with themselves
    if (dragIndex === dropIndex) {
      return;
    }

    // Determine rectangle on screen
    const dropBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const dropMiddleY = (dropBoundingRect.bottom - dropBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const dropClientY = clientOffset.y - dropBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < dropIndex && dropClientY < dropMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > dropIndex && dropClientY > dropMiddleY) {
      return;
    }

    // Time to actually perform the action
    const { layout, columnIndex, rowIndex } = props;

    if (monitor.getItem().rowIndex === rowIndex && monitor.getItem().columnIndex === columnIndex) {
      const originalPosition = {
        rowIndex,
        columnIndex,
        widgetIndex: dragIndex,
      };

      const destination = {
        rowIndex,
        columnIndex,
        widgetIndex: dropIndex,
      };

      const newLayout = sortWidget(layout, originalPosition, destination, monitor.getItem().widgetName);

      props.onMove(newLayout, originalPosition, destination);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().widgetIndex = dropIndex; // eslint-disable-line no-param-reassign
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
class WidgetFrame extends Component {
   render() {
     const {
       frameComponent,
       children,
       editable,
       title,
       frameSettings,
       connectDragSource,
       connectDropTarget,
       isDragging,
       rowIndex,
       columnIndex,
       widgetIndex,
     } = this.props;

     let selected = null;

     if (frameComponent) {
       // if user provided a custom frame,  use it
       selected = createElement(frameComponent, {
         children,
         editable,
         title,
         settings: frameSettings,
         onRemove: this.remove,
         onEdit: this.edit,
         rowIndex,
         columnIndex,
         widgetIndex,
         isDragging,
       });
     } else {
       // else use the default frame
       selected = (
         <DefaultFrame
           title={title}
           editable={editable}
           children={children}
           onRemove={this.remove}
           onEdit={this.edit}
         />
       );
     }
     const opacity = isDragging ? 0 : 1;
     const widgetFrame = (
       <div style={{ opacity }}>
         {selected}
       </div>
     );

     return editable ? connectDragSource(connectDropTarget(widgetFrame)) : widgetFrame;
   }

  edit = () => {
    const { layout, rowIndex, columnIndex, widgetIndex } = this.props;
    this.props.onEdit(layout.rows[rowIndex].columns[columnIndex].widgets[widgetIndex].key);
  }

  remove = () => {
    const { layout, rowIndex, columnIndex, widgetIndex } = this.props;
    const newLayout = removeWidget(layout, rowIndex, columnIndex, widgetIndex);
    this.props.onRemove(newLayout, rowIndex, columnIndex, widgetIndex);
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
   * User provided settings for be use by custom widget frame.
   */
  frameSettings: PropTypes.object,

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

  /**
   * Function called when to edit a widget.
   */
  onEdit: PropTypes.func,
};

WidgetFrame.defaultProps = {
  frameSettings: {},
};

export default WidgetFrame;
