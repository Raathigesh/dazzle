import * as React from "react";
import { ReactStateless, ILayoutWidget, IWidgetsObject, ILayout } from "../models";
export interface IWidgetsProps {
    /**
     * Widgets that should be rendered.
     */
    widgets: ILayoutWidget[];

    /**
     * Widgets that are available in the dashboard.
     */
    widgetTypes: IWidgetsObject;

    /**
     * Function that should be called when a widget is about to be removed.
     */
    onRemove?: Function;

    /**
     * Layout of the dahsboard.
     */
    layout?: ILayout;

    /**
     * Index of the column these widgets should be placed.
     */
    columnIndex?: number;

    /**
     * Index of the row these widgets should be placed.
     */
    rowIndex?: number;

    /**
     * Indicates weatehr dashboard is in ediable mode or not.
     */
    editable?: boolean;

    /**
     * User provided widget frame that should be used instead of the default one.
     */
    frameComponent?: React.ComponentClass<any>;

    /**
     * Method to call when a widget is moved.
     */
    onMove?: Function;


    widgetIndex?: number;
}