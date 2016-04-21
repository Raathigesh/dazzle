## Add New Widget To Dashboard
When add widget is clicked, `onAdd` function will be called. The `onAdd` function will be provided with the current layout, index of the row and column where the new widget should be added.

Below is a sample of adding a widget when `Add Widget` is clicked.

```javascript
import Dashboard, { addWidget } from 'react-dazzle';
import HelloWorld from './widgets/HelloWorld';

class App extends React.Component {
  constructor() {
    this.state = {
      layout: {
        rows: [{
          columns: [{
            className: 'col-md-12',
            widgets: [{name: 'HelloWorldWidget'}],
          }],
        }],
      },
      widgets: {
        HelloWorldWidget: {
          type: HelloWorld,
          title: 'Hello world widget',
        }
      }
    };
  }

  onAdd = (layout, rowIndex, columnIndex) => {
    // Add another HelloWorld widget
    this.setState({
      layout: addWidget(layout, rowIndex, columnIndex, 'HelloWorldWidget'),
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

But in a more practical environment use-case, your should select the widget he wants to add to the dashboard. Dazzle laves the responsibility of presenting the user with the UI where they can pick a widget to you.

You could show a modal dialog with all the widgets that could be added and allow the user to select one widget.

When user selects a widget, call the `addWidget` method with the name of the widget that should be added along with additional parameters.
