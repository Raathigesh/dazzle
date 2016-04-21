<h1 align="center">
  <img src="https://raw.githubusercontent.com/Raathigesh/Dazzle/master/docs/Dazzle.png" alt="Dazzle">
   <br>
  React Dazzle
  <br>
  <h4 align="center">Dazzling dashboards in ReactJS</h4>
</h1>

<p align="center">
  <a href="https://github.com/Raathigesh/Dazzle/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/express.svg?maxAge=2592000&style=flat-square"
         alt="License">
  </a>
  <a href="https://travis-ci.org/Raathigesh/Dazzle">
    <img src="https://img.shields.io/travis/Raathigesh/Dazzle.svg?style=flat-square"
         alt="Travis Build">
  </a>
  <a href="https://codecov.io/github/Raathigesh/Dazzle?branch=master">
    <img src="https://img.shields.io/codecov/c/github/Raathigesh/Dazzle.svg?style=flat-square" alt="Coverage via Codecov" />
  </a>
</p>
<br>

Dazzle is a library for building dashboards with React JS. Dazzle does not depend on any front-end libraries but it makes it easier to integrate with them as you wish.

Dazzle's goal is to be flexible as possible. Even though there are some UI components readily available for you to start building dashboards fast, you have the complete control to override them as you wish with your own styles and layout.

### Dashboard Component Properties
| Props | Type| Description | Required |
| --- | --- | --- | --- |
| layout | Object | Layout of the dashboard. | Yes |
| widgets | Object| Widgets that could be added to the dashboard. | Yes |
| editable | Boolean |Weather the dashboard is in editable mode. | No |
| rowClass | string |CSS class name(s) that should be given to the row. | No |
| editableColumnClass | string |CSS class name(s) that should be used when a column is in editable mode. | No |
| droppableColumnClass  | string |CSS class name(s) that should be used when a widget is about to be dropped in a column. | No |
| frame | Component | Customized frame component which should be used instead of the default frame. | No |
| addWidgetComponent | Component | Customized add widget component which should be used instead of the default `AddWidgetComponent`. | No |
| onAdd(layout, rowIndex, columnIndex) | Function |Will be called when a widget is added.| No |
| onRemove(layout) | Function |Will be called when a widget is removed.| No |
| onMove(layout) | Function | Will be called when a widget is moved.| No |

### The `widgets` prop
`widgets` prop takes an object. A sample widgets object would look like below.

```javascript
{
  HelloWorldWidget: {
    type: HelloWorld,
    title: 'Hello World Title'
  },
  AnotherWidget: {
    type: AnotherWidget,
    title: 'Another Widget Title'
  }
 }
 ```
 - `type` property - Should be a React component function or class.
 - `title` property - Title of the widget that should be displayed on top of the widget.


### The `layout` prop
The `layout` prop takes the current layout of the dashboard. Layout could have multiple rows and columns. A sample layout object would look like

```javascript
{
  rows: [{
    columns: [{
      className: 'col-md-6 col-sm-6 col-xs-12',
      widgets: [{name: 'HelloWorldWidget'}]
    }, {
      className: 'col-md-6 col-sm-6 col-xs-12',
      widgets: [{name: 'AnotherWidget'}]
    }]
  }]
}
```
- `className`  property - CSS class(es) that should be given to the column in  the grid layout. Above sample layout uses the classes from bootstrap library. You could use the classes of your CSS library.
- `widgets` property - An array of widgets that should be rendered in the dashboard. `name` property of the widgets array should be a key from the `layout` object.

### Enabling edit mode
Setting `editable` prop to `true` will make the dashboard editable.

### Add new widget to the dashboard
Adding a new widget is simply updating the layout with the new widget and providing it to the dashboard component.

```javascript
import { addWidget } from 'react-dazzle';
let newLayout = addWidget(layout, rowIndex, columnIndex, widgetName);
```

Provide the `newLayout` back to the dashboard component and it will render the new widget.

<a href="https://github.com/Raathigesh/Dazzle/blob/master/docs/ImplementingACustomFrame.md">More info here on how to show a dialog box and allow user to pick a widget to add.</a>

### Remove a widget from the dashboard
When a widget is removed, `onRemove` method will be called and new layout will be available as an argument of `onRemove` method. The new layout should be provided back to the dashboard component.
