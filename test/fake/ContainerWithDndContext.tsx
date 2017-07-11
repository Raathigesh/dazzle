import * as React from 'react';
import { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

 @DragDropContext(HTML5Backend)
class ContainerWithDndContext extends Component<{}, {}> {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default ContainerWithDndContext;
