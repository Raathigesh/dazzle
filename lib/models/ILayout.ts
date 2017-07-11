export interface ILayoutRow {
    columns: ILayoutColumn[];
}
export interface ILayoutColumn {
    className: string;
    widgets: ILayoutWidget[];
}
export interface ILayoutWidget {
    key: string;
}
export interface ILayout {
    rows?: ILayoutRow[];
}