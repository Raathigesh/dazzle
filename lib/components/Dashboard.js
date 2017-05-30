import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import LayoutRenderer from './LayoutRenderer';

/**
 * Main dashboard component. This is where all of this starts.
 */
 @DragDropContext(HTML5Backend)
class Dashboard extends Component {
  render() {
    return (
      <div>
        <LayoutRenderer {...this.props} />
      </div>
    );
  }
}

Dashboard.PropTypes = {
  /**
   * The layout of the dashboard.
   */
  layout: PropTypes.object,

  /**
   * List of widgets that are avilable in the dashboard.
   */
  widgets: PropTypes.object,

  /**
   * Indicates weather the dashoard is in editable state or not.
   */
  editable: PropTypes.bool,

  /**
   * CSS class name that should be provided to the row. Default is 'row'.
   */
  rowClass: PropTypes.string,

  /**
   * Customized widget frame. The dashboard supports a default frame. But if
   * it doesn't suit your needs or the look and feel is not what you wanted, you
   * could create your own widget frame and pass it through here. Ever widget Will
   * use this as the outer container which displays controls like 'remove' button
   * on edit mode.
   */
  frameComponent: PropTypes.func,

  /**
   * A custom component for the `add widget` button.
   */
  addWidgetComponent: PropTypes.func,

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass: PropTypes.string,

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass: PropTypes.string,

  /**
   * Text that should be displayed in the `AddWidget` component.
   */
  addWidgetComponentText: PropTypes.string,

  /**
   * Will be called when a widget removed by the user from the dashboard.
   * Should be handled if the dashbord supports edit functionality.
   * provides the updated layout object. This layout object  with the removed widget
   * should be given back to the dashboard through the layout prop to re-render the dashboard.
   */
  onRemove: PropTypes.func,

  /**
   * Will be called when user tries to add a widget into a column.
   */
  onAdd: PropTypes.func,

  /**
   * Function to be called when a widget is moved by the user.
   */
  onMove: PropTypes.func,
};

export default Dashboard;
