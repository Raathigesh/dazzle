import React, { PropTypes, createElement } from 'react';
import './style.css';
import DefaultFrame from './DefaultFrame';

function removeWidget(layout, columnIndex, rowIndex, widgetIndex, onRemove) {
	layout.rows[rowIndex].columns[columnIndex].widgets.splice(widgetIndex, 1);
	onRemove(layout);
}

const WidgetFrame = ({onRemove, children, layout, columnIndex, rowIndex, widgetIndex, editable , frame}) => {

	var remove = function() {
		return function() {
			removeWidget(layout, columnIndex, rowIndex, widgetIndex, onRemove);
		}
	};

	let selected = null;
	if (frame) {
		selected = createElement(frame, {
			children,
			editable,
			onRemove: remove
		});
	} else {
		selected = <DefaultFrame children={children} editable={editable} onRemove={remove}/>
	}

	return selected;
};

WidgetFrame.PropTypes = {
	onRemove: PropTypes.func,
	children: PropTypes.array,
	layout: PropTypes.object,
	editable: PropTypes.bool
};

export default WidgetFrame
