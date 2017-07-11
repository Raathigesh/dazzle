import * as React from 'react';
import { IColumnProps } from "../models";
import { DropTarget } from 'react-dnd';
import { WIDGET } from './ItemTypes';
import AddWidget from './AddWidget';
import { moveWidget } from '../util';

const columnTarget = {
  drop(props: IColumnProps, monitor) {
    const { layout, rowIndex, columnIndex, onMove} = props;
    const item = monitor.getItem();
    if (item.columnIndex !== columnIndex || item.rowIndex !== rowIndex) {
      const movedLayout = moveWidget(layout, {
        rowIndex: item.rowIndex,
        columnIndex: item.columnIndex,
        widgetIndex: item.widgetIndex,
      }, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
        }, item.widgetName);
      onMove(movedLayout);
    }
  },
};

/**
 * Column of the dashboard grid. A column holds multiple widgets.
 */
@DropTarget(WIDGET, columnTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
class Column extends React.Component<React.HTMLProps<JSX.Element> & IColumnProps, {}> {
  static DecoratedComponent?: any;
  static defaultProps: React.HTMLProps<JSX.Element> & IColumnProps = {
    editableColumnClass: 'editable-column',
    droppableColumnClass: 'droppable-column',
  }
  render() {
    const {
      className,
      layout,
      rowIndex,
      columnIndex,
      editable,
      children,
      connectDropTarget,
      onAdd,
      isOver,
      canDrop,
      editableColumnClass,
      droppableColumnClass,
      addWidgetComponentText,
      addWidgetComponent,
    } = this.props;

    let classes = className;
    classes = editable ? `${className} ${editableColumnClass}` : classes;
    const isActive = isOver && canDrop;
    classes = isActive ? `${classes} ${droppableColumnClass}` : classes;

    let addWidgetComponentToUse = null;
    if (addWidgetComponent) {
      addWidgetComponentToUse = React.createElement(addWidgetComponent, { text: addWidgetComponentText, onClick: () => { onAdd(layout, rowIndex, columnIndex); } });
    } else {
      addWidgetComponentToUse = <AddWidget text={addWidgetComponentText} onClick={() => { onAdd(layout, rowIndex, columnIndex); }} />;
    }

    return (
      connectDropTarget(
        <div className={classes}>
          {editable && addWidgetComponentToUse}
          {children}
        </div>
      )
    );
  }
}

export default Column;
