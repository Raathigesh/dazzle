import * as React from 'react';
import { ILayout, IWidgetsObject, ILayoutColumn, IAddWidgetProps } from "../models";
export interface IRowProps {
/**
   * CSS class that should be used to represent a row.
   */
  rowClass?: string;

  /**
   * Columns of the layout.
   */
  columns: ILayoutColumn[];

  /**
   * Widgets that should be used in the dashboard.
   */
  widgets: IWidgetsObject;

  /**
   * Layout of the dashboard.
   */
  layout?: ILayout;

  /**
   * Index of the row where this column is in.
   */
  rowIndex?: number;

  /**
   * Indicates weather the dashboard is in editable mode or not.
   */
  editable?: boolean;

  /**
   * Custom frame that should be used with the widget.
   */
  frameComponent?: React.ComponentClass<any>;

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass?: string;

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass?: string;

  /**
   * Custom AddWidget component.
   */
  addWidgetComponent?: React.ComponentClass<IAddWidgetProps>;

  /**
   * Text that should be displyed in the AddWidget component.
   */
  addWidgetComponentText?: string;

  /**
   * Method that should be called when a component is added.
   */
  onAdd?: (layout: ILayout, rowIndex: number, columnIndex: number) => void;

  /**
   * Method that should be called when a component is removed.
   */
  onRemove?: Function

  /**
   * Method that should be called when a widget is moved.
   */
  onMove?: Function;
}
