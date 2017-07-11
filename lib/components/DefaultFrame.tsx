import * as React from 'react';
import { ReactStateless, IDefaultFrameProps } from "../models";
/**
 * Default frame that will be used with the widgets.
 */
const DefaultFrame: ReactStateless<IDefaultFrameProps> = ({children, onRemove, editable, title}) => {
  return (
    <div className="defaultWidgetFrame">
      <div className="defaultWidgetFrameHeader">
        <span className="title">{title} !!!!!</span>
        {editable && <a  className="remove" onClick={() => {onRemove();}}>Remove</a>}
      </div>
      {children}
    </div>
  );
};


export default DefaultFrame;
