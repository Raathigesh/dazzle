import { ILayout } from "../models";
export interface IWidgetFrame {
    /**
     * Layout of the dahsboard.
     */
    layout: ILayout;

    /**
     * Index of the column these widgets should be placed.
     */
    columnIndex: number;

    /**
     * Index of the row these widgets should be placed.
     */
    rowIndex: number;

    /**
     * Index of the widget.
     */
    widgetIndex: number;

    /**
     * Indicates weatehr dashboard is in ediable mode or not.
     */
    editable: boolean;

    /**
     * User provided widget frame that should be used instead of the default one.
     */
    frameComponent: React.ComponentClass<any>;

    /**
     * Name of the widget.
     */
    widgetName: string;

    /**
     * Title of the widget.
     */
    title: string;

    /**
     * Weather the component is being dragged.
     */
    isDragging?: boolean;

    /**
     * ReactDnd's connectDragSource().
     */
    connectDragSource?: Function;

    /**
     * ReactDnd's connectDropTarget().
     */
    connectDropTarget?: Function;

    /**
     * Function that should be called when a widget is about to be removed.
     */
    onRemove: Function;

    onMove: Function;
}
