import React, { PropTypes } from 'react'

const AddWidget = ({onClick}) => {
	return (
		<div className="add-widget-button" onClick={onClick}>
			<a>Add Widget</a>
		</div>
	);
};

AddWidget.PropTypes = {
	/**
	 * Should be called when 'add' is clicked
	 */
	onClick: PropTypes.func
};

export default AddWidget
