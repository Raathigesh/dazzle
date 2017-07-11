import * as React from 'react';
import { ILayout, IWidgetsObject, IAddWidgetProps } from "../models";
export interface ILayoutRendererProps {
      /**
   * Layout of the dashboard.
   */
  layout?: ILayout;

  /**
   * Widgets that the dashboard supports.
   */
  widgets?: IWidgetsObject;

  /**
   * Indicates weather this dashboard is in editable mode.
   */
  editable?: boolean;

  /**
   * Function that will be called when user removed a widget.
   */
  onRemove?: Function

  /**
   * Function that will be called user tries to add a widget.
   */
  onAdd?: (layout: ILayout, rowIndex: number, columnIndex: number) => void;
  /**
   * Frame that should be used as the outer cotnainer of the widget.
   */
  frameComponent?: React.ComponentClass<any>;

  /**
   * Class name that should be provided to the row component.
   */
  rowClass?: string;

  /**
   * Function to be called when a widget is moved by the user.
   */
  onMove?: Function

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass?: string;

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass?: string;

  /**
   * Customized AddWidget component.
   */
  addWidgetComponent?: React.ComponentClass<IAddWidgetProps>

  /**
   * Text that should be displayed in the `AddWidget` component.
   */
  addWidgetComponentText?: string;
}