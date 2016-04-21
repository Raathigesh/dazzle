import React, { Component, PropTypes, createElement } from 'react';
import { DragSource } from 'react-dnd';
import { WIDGET } from './ItemTypes';
import { removeWidget } from '../util';
import DefaultFrame from './DefaultFrame';
import cloneDeep from 'lodash.clonedeep';

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

/**
 * Frame component which surrounds each widget.
 */
 @DragSource(WIDGET, boxSource, (connect, monitor) => ({
   connectDragSource: connect.dragSource(),
   isDragging: monitor.isDragging(),
 }))
class WidgetFrame  extends Component {
  render() {
    const {
      frame,
      children,
      editable,
      title,
      connectDragSource,
    } = this.props;

    let selected = null;

    if (frame) {
      // if user provided a custom frame,  use it
      selected = createElement(frame, {	children,	editable, title, onRemove: this.remove });
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

    return connectDragSource(
      <div>{selected}</div>
    );
  }

  remove = () => {
    const { layout, rowIndex, columnIndex, widgetIndex } = this.props;
    const newLayout = removeWidget(layout, rowIndex, columnIndex,  widgetIndex);
    this.props.onRemove(cloneDeep(newLayout));
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
  frame: PropTypes.func,

  /**
   * Name of the widget.
   */
  widgetName: PropTypes.string,

  /**
   * Title of the widget.
   */
  title: PropTypes.string,

  /**
   * ReactDnd's connectDragSource().
   */
  connectDragSource: PropTypes.func,

  /**
   * Function that should be called when a widget is about to be removed.
   */
  onRemove: PropTypes.func,
};

export default WidgetFrame;
