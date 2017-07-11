import { IAddWidgetProps, ILayout } from "../models";
export interface IColumnProps {
  
  /**
   * Function that should be called when user tries to add a widget
   * to the column.
   */
  onAdd?: (layout: ILayout, rowIndex: number, columnIndex: number) => void;

  /**
   * Layout of the dashboard.
   */
  layout?: ILayout;

  /**
   * Index of the row that this column resides.
   */
  rowIndex?: number;

  /**
   * Index of this column.
   */
  columnIndex?: number;

  /**
   * Indicates weather dashboard is in editable state
   */
  editable?: boolean;

  /**
   * Indicates weather a widget is being draged over.
   */
  isOver?: boolean;

  /**
   * Indicated a widget can be dropped.
   */
  canDrop?: boolean;

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass?: string;

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass?: string;

  /**
   * Text that should be given to the AddWidget component.
   */
  addWidgetComponentText?: string;

  /**
   * ReactDnd's connectDropTarget.
   */
  connectDropTarget?: Function;

  /**
   * Customized AddWidget component.
   */
  addWidgetComponent?: React.ComponentClass<IAddWidgetProps>;

  onMove?: Function;


}