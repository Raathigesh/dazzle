import * as React from "react";
import { ReactStateless } from "../models";
export interface IWidgetsObject {
    [property: string]: IWidget;
}

export interface IWidget {
    type: React.ComponentClass<any> | ReactStateless<any>;
    title: string;
    props?: any;
}