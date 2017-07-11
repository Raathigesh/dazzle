import * as React from "react";
import { PropTypes, Component } from 'react';

interface IProps {
  text: string;
  onClick: any;
}

class CustomAddWidgetButton extends Component<IProps, {}> {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
  }
  render() {
    const {text, onClick} = this.props;
    return (
      <div>
        <button onClick={onClick}>{text}</button>
      </div>
    );
  }
};

export default CustomAddWidgetButton;
