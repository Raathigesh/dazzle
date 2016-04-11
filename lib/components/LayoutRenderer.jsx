import React, { PropTypes } from 'react';
import Row from './Row';
import Column from './Column';
import Widgets from './Widgets';

/**
 * Returns a set of columns that belongs to a row.
 */
function getColumns(columns, widgets, onRemove, layout, rowIndex, editable, onAdd, frame) {
	return columns.map((column, index) => {
		return (
			<Column className={column.className} onAdd={onAdd} layout={layout} rowIndex={rowIndex} columnIndex={index}>
				<Widgets
					widgets={column.widgets}
					widgetTypes={widgets}
					onRemove={onRemove}
					layout={layout}
					rowIndex={rowIndex}
					columnIndex={index}
					editable= {editable}
					frame = {frame}
					/>
			</Column>
		);
	});
}

/**
 * Renders the row, column layout based on the layout provided to the dashboard.
 */
const LayoutRenderer = ({layout, widgets, onRemove, editable, onAdd, frame}) => {
	let rows = layout.rows.map((row, rowIndex) => {
		return (
			<Row>
				{getColumns(row.columns, widgets, onRemove, layout, rowIndex, editable, onAdd, frame)}
			</Row>
		);
	});

	return (
		<div>
			{rows}
		</div>
	);
};

LayoutRenderer.propTypes = {
	/**
	 * Layout of the dashboard.
	 */
	layout: PropTypes.object,

	/**
	 * Widgets that the dashboard supports.
	 */
	widgets: PropTypes.object,

	/**
	 * Indicates weather this dashboard is in editable mode.
	 */
	editable: PropTypes.bool,

	/**
	 * Function that will be called when user removed a widget.
	 */
	onRemove: PropTypes.func,

	/**
	 * Function that will be called user tries to add a widget.
	 */
	onAdd: PropTypes.func,

	/**
	 * Frame that should be used as the outer cotnainer of the widget.
	 */
	frame: PropTypes.object
};

LayoutRenderer.defaultProps = {
	/**
	 * Default layout.
	 */
	layout: {
		rows: []
	}
}

export default LayoutRenderer;
