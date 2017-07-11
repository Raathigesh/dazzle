import * as React from "react";

export interface ReactStateless<T> extends React.StatelessComponent<React.HTMLProps<JSX.Element> & T> {
  
}