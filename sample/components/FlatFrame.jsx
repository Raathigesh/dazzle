import React, { PropTypes } from 'react';

const FlatFrame = ({children, onRemove, editable, title}) => {
	return (
		<div className="x_panel fixed_height_320">
      <div className="x_title">
          <h2>{title}</h2>
          <ul className="nav navbar-right panel_toolbox">
              {editable && <li><a onClick={() => {onRemove()}} className="close-link"><i className="fa fa-close"></i></a>
              </li>}
          </ul>
          <div className="clearfix"></div>
      </div>
      <div className="x_content">
				{children}
      </div>
  </div>
	)
}

export default FlatFrame;
