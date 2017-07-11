import * as React from 'react';
import { ILayout, IWidgetsObject, IAddWidgetProps } from "../models";
export interface IDashboardProps {
      /**
   * The layout of the dashboard.
   */
  layout?: ILayout;

  /**
   * List of widgets that are avilable in the dashboard.
   */
  widgets?: IWidgetsObject;

  /**
   * Indicates weather the dashoard is in editable state or not.
   */
  editable?: boolean;

  /**
   * CSS class name that should be provided to the row. Default is 'row'.
   */
  rowClass?: string;

  /**
   * Customized widget frame. The dashboard supports a default frame. But if
   * it doesn't suit your needs or the look and feel is not what you wanted, you
   * could create your own widget frame and pass it through here. Ever widget Will
   * use this as the outer container which displays controls like 'remove' button
   * on edit mode.
   */
  frameComponent?: React.ComponentClass<any>;

  /**
   * A custom component for the `add widget` button.
   */
  addWidgetComponent?: React.ComponentClass<IAddWidgetProps>;

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass?: string;

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass?: string;

  /**
   * Text that should be displayed in the `AddWidget` component.
   */
  addWidgetComponentText?: string;

  /**
   * Will be called when a widget removed by the user from the dashboard.
   * Should be handled if the dashbord supports edit functionality.
   * provides the updated layout object. This layout object  with the removed widget
   * should be given back to the dashboard through the layout prop to re-render the dashboard.
   */
  onRemove?: Function;

  /**
   * Will be called when user tries to add a widget into a column.
   */
  onAdd?: (layout: ILayout, rowIndex: number, columnIndex: number) => void;

  /**
   * Function to be called when a widget is moved by the user.
   */
  onMove?: Function;
}