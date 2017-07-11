import * as React from "react";
import { PropTypes, Component } from 'react';

class Container extends Component<{}, {}> {
  static propTypes = {
    children: PropTypes.array,
  }
  render() {
    const {children} = this.props;
    return (
      <div className="container body">
        <div className="main_container">
          {children}
        </div>
      </div>
    );
  }
};

export default Container;