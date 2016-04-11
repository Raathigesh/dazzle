import React, { PropTypes } from 'react';

/**
 * Colum of the dashboard grid. A column holds multiple widgets. 
 */
const Column = ({ className, children, onAdd, rowIndex, columnIndex, layout }) => {
	return (
		<div className={ className }>
			<div>
				<button onClick={() => {onAdd(layout, rowIndex, columnIndex)}}>Add</button>
			</div>
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
	columnIndex: PropTypes.number
};

export default Column;
