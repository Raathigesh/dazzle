import React, { PropTypes, createElement } from 'react';
import { removeWidget } from '../util';
import DefaultFrame from './DefaultFrame';
import cloneDeep from 'lodash.clonedeep';

/**
 * Frame component which surrounds each widget.
 */
const WidgetFrame = ({onRemove, children, layout, columnIndex, rowIndex, widgetIndex, editable , frame, title}) => {
	var remove = function() {
		let newLayout = removeWidget(layout, rowIndex, columnIndex,  widgetIndex);
		onRemove(cloneDeep(newLayout));
	};

	let selected = null;
	if (frame) {
		selected = createElement(frame, {	children,	editable, title, onRemove: remove });
	} else {
		selected = <DefaultFrame children={children} editable={editable} onRemove={remove} title={title}/>
	}
	return selected;
};

WidgetFrame.PropTypes = {
	/**
	 * Childrens of the widget frame.
	 */
	children: PropTypes.array,
	/**
	 * Function that should be called when a widget is about to be removed.
	 */
	onRemove: PropTypes.func,

	/**
	 * Layout of the dahsboard.
	 */
	layout: PropTypes.object,

	/**
	 * Index of the column these widgets should be placed.
	 */
	columnIndex: PropTypes.number,

	/**
	 * Index of the row these widgets should be placed.
	 */
	rowIndex: PropTypes.number,

	/**
	 * Index of the widget.
	 */
	widgetIndex: PropTypes.number,

	/**
	 * Indicates weatehr dashboard is in ediable mode or not.
	 */
	editable: PropTypes.bool,

	/**
	 * User provided widget frame that should be used instead of the default one.
	 */
	frame: PropTypes.object
};

export default WidgetFrame
