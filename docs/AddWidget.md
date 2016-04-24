## Add New Widget To Dashboard

When add widget is clicked, `onAdd` function will be called. The `onAdd` function will be provided with the current layout, index of the row and column where the new widget should be added.

Below is a sample of adding a widget when `Add Widget` is clicked.

```javascript
import React, { Component } from 'react';
import Dashboard, { addWidget } from 'react-dazzle';
import HelloWorld from './widgets/HelloWorld';

class App extends Component {
  constructor() {
    this.state = {      
      widgets: {
        GreetingsWidget: {
          type: HelloWorld,
          title: 'Hello World Greetings',
        }
      },
      layout: {
        rows: [{
          columns: [{
            className: 'col-md-12',
            widgets: [{key: 'GreetingsWidget'}],
          }],
        }],
      }
    };
  }

  onAdd = (layout, rowIndex, columnIndex) => {
    // Add another Greetings Widget
    this.setState({
      layout: addWidget(layout, rowIndex, columnIndex, 'GreetingsWidget'),
    });
  }

  render() {
    return (
      <Dashboard
        widgets={this.state.widgets}
        layout={this.state.layout}
        onAdd={this.onAdd}        
    );
  }
}
```

But in a more practical use-case, user should select the widget he wants to add to the dashboard. Dazzle leaves the responsibility of presenting the user with the UI where they can pick a widget to you.

You could show a modal dialog with all the widgets that could be added and allow the user to select one widget.

When user selects a widget, call the `addWidget` method with the name of the widget along with other parameters.

This sample has such implementation. // TODO

#### More docs
- [Readme](../README.md)
- [Add a widget](./AddWidget.md)
- [Implementing custom Frame component](./ImplementingACustomFrame.md)
- [Implementing custom AddWidget component](./ImplementingCustomAddWidgetButton.md)
