## Add new widget to dashboard

When add widget is clicked, `onAdd` function will be called. The `onAdd` function will be provided with the current `layout`, index of the `row` and `column` where the new widget should be added.

You could add a new widget to the dashboard by calling the method `addWidget` from dazzle and passing the parameters you received from the `onAdd` callback along with the key of the widget that should be added,

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

When user selects a widget, call the `addWidget` method with the key of the widget along with other parameters.

[The sample project has such implementation](https://github.com/Raathigesh/Dazzle-Starter-Kit). [Refer the `Dashboard` component](https://github.com/Raathigesh/Dazzle-Starter-Kit/blob/master/src/components/Dashboard.jsx) for more details.

#### More docs
- [Readme](../README.md)
- [Add a widget](./AddWidget.md)
- [Implementing custom Frame component](./ImplementingACustomFrame.md)
- [Implementing custom AddWidget component](./ImplementingCustomAddWidgetButton.md)
