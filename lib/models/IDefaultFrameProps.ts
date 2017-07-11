export interface IDefaultFrameProps {
    /**
   * Indicates weather the dashboard is in editable mode.
   */
  editable: boolean;  

  /**
   * Function to call when the widget is removed.
   */
  onRemove: Function;

 /**
  * Title of the widget
  */
  title: string;
}   