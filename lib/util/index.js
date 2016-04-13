/**
 * Adds the specified widget to the specified position in the layout.
 * @param {[type]} layout      The layout object itself
 * @param {[type]} rowIndex    Index of the row in the layout
 * @param {[type]} columnIndex Index of the column in the layout

 * @param {[type]} widgetName  Name of the widget that should be added
 * @param {[type]} props       Props that should be supplied to the widget if any
 * @return {[type]}            New layout
 */
export function addWidget(layout, rowIndex, columnIndex, widgetName, props) {
	layout.rows[rowIndex].columns[columnIndex].widgets.push({
		name: widgetName
	});
	return layout;
}

/**
 * Removes the widget at a specified index.
 * @param  {[type]} layout      Layout of the dashboard
 * @param  {[type]} rowIndex    Index of the row where the widget is located
 * @param  {[type]} columnIndex Index of the column where the widget is located
 * @param  {[type]} widgetIndex Index of the widget itself
 * @return {[type]}             New layout
 */
export function removeWidget(layout, rowIndex, columnIndex, widgetIndex) {
	layout.rows[rowIndex].columns[columnIndex].widgets.splice(widgetIndex, 1);
	return layout;
}
