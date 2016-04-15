import React, { PropTypes } from 'react';
import AddWidget from './AddWidget';

/**
 * Colum of the dashboard grid. A column holds multiple widgets.
 */
const Column = ({ className, children, onAdd, rowIndex, columnIndex, layout, editable }) => {
	return (
		<div className={ className }>
			{editable && <AddWidget onClick={() => {onAdd(layout, rowIndex, columnIndex)}}/>}
			{ children }
		</div>
	);
};

Column.propTypes = {
	/**
	 * Children of the column
	 */
	children: PropTypes.array,

	/**
	 * CSS class that should be used with the column.
	 */
	className: PropTypes.string,

	/**
	 * Function that should be called when user tries to add a widget
	 * to the column.
	 */
	onAdd: PropTypes.func,

	/**
	 * Layout of the dashboard.
	 */
	layout: PropTypes.object,

	/**
	 * Index of the row that this column resides.
	 */
	rowIndex: PropTypes.number,

	/**
	 * Index of this column.
	 */
	columnIndex: PropTypes.number,

	/**
	 * Indicates weather dashboard is in editable state
	 */
	editable: PropTypes.bool
};

export default Column;
