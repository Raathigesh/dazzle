import React, { PropTypes } from 'react';

/**
 * Default frame that will be used with the widgets.
 */
const DefaultFrame = ({children, onRemove, editable}) => {
	return (
		<div className="defaultWidgetFrame">
			<div className="defaultWidgetFrameHeader">
				<h2>Visitors location</h2>
				{editable && <button onClick={() => {onRemove()}}>Remove</button>}
			</div>
			{children}
		</div>
	);
}

DefaultFrame.propTypes = {
	/**
	 * Indicates weather the dashboard is in editable mode.
	 */
	editable: PropTypes.bool,

	/**
	 * Children of the frame.
	 */
	children: PropTypes.object,

	/**
	 * Function to call when the widget is removed.
	 */
	onRemove: PropTypes.func
};

export default DefaultFrame
