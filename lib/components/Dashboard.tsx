import * as React from 'react';
import { IDashboardProps } from "../models";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import LayoutRenderer from './LayoutRenderer';
import { ILayout, IWidgetsObject } from "../models";
/**
 * Main dashboard component. This is where all of this starts.
 */
 @DragDropContext(HTML5Backend)
class Dashboard extends React.Component<React.HTMLProps<JSX.Element> & IDashboardProps, {}> {
  render() {
    return (
      <div>
        <LayoutRenderer {...this.props} />
      </div>
    );
  }
}

export default Dashboard;
