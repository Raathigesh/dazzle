import React, { PropTypes, createElement } from 'react';
import { DragSource } from 'react-dnd';
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
 @DragSource('BOX', boxSource, (connect, monitor) => ({
   connectDragSource: connect.dragSource(),
   isDragging: monitor.isDragging(),
 }))
class WidgetFrame  extends React.Component {
  render() {
    const { frame, children, editable, title, rowIndex, columnIndex, widgetIndex, widgetName, connectDragSource } = this.props;
    let selected = null;
    if (frame) {
      selected = createElement(frame, {	children,	editable, title, onRemove: this.remove });
    } else {
      selected = <DefaultFrame children={children} editable={editable} onRemove={this.remove} title={title} rowIndex={rowIndex} columnIndex={columnIndex} widgetIndex={widgetIndex} widgetName={widgetName}/>;
    }

    return connectDragSource(
      <div>{selected}</div>
    );
  }

  remove = () => {
    const { layout, rowIndex, columnIndex, widgetIndex } = this.props;
    const newLayout = removeWidget(layout, rowIndex, columnIndex,  widgetIndex);
    onRemove(cloneDeep(newLayout));
  }
}

WidgetFrame.propTypes = {
  /**
   * Childrens of the widget frame.
   */
  children: PropTypes.array,
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
  frame: PropTypes.object,

  widgetName: PropTypes.string,

  title: PropTypes.string,
  connectDragSource: PropTypes.func,
};

export default WidgetFrame;
