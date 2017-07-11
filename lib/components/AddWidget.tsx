import * as React from 'react';
import { ReactStateless, IAddWidgetProps } from "../models";
/**
 * Default AddWidget component.
 * @param  {[type]} {text    [description]
 * @param  {[type]} onClick} [description]
 * @return {[type]}          [description]
 */



const AddWidget : ReactStateless<IAddWidgetProps> = ({text, onClick}: IAddWidgetProps) => {
  return (
    <div className="add-widget-button" onClick={onClick}>
      <a className="add-widget-link">{text}</a>
    </div>
  );
};


AddWidget.defaultProps = {
  text: 'Add Widget',
};

export default AddWidget;
