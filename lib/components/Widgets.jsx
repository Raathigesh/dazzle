import React, { PropTypes, createElement } from 'react';
import WidgetFrame from './WidgetFrame';

const Widgets = ({widgets, widgetTypes, onRemove, layout, columnIndex, rowIndex, editable, frame}) => {
	let createdWidgets = widgets.map((widget, index)=> {
			return (
				<WidgetFrame onRemove={onRemove} layout={layout} columnIndex={columnIndex} rowIndex={rowIndex} widgetIndex={index} editable={editable} frame={frame}>
					{
						createElement(widgetTypes[widget.name].type, {
							multireducerKey: widget.key
						})
					}
				</WidgetFrame>
			);
		});

	return <div>{createdWidgets}</div>;
};

Widgets.PropTypes = {
	/**
	 * Widgets that are available in the dashboard.
	 */
	widgets: PropTypes.array,
	widgetTypes: PropTypes.array,
	onRemove: PropTypes.func,
	layout: PropTypes.object,
	columnIndex: PropTypes.number,
	rowIndex: PropTypes.number,
	editable: PropTypes.bool,
	frame: PropTypes.object
};

export default Widgets;
