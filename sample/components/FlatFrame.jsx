import React, { PropTypes } from 'react';

const FlatFrame = ({children, onRemove, editable}) => {
	return (
		<div className="defaultWidgetFrame">
			<div className="defaultWidgetFrameHeader">
				<h2>Flat Frame</h2>
				{editable && <button onClick={() => {onRemove()}}>Remove</button>}
			</div>
			{children}
		</div>
	)
}

export default FlatFrame;
