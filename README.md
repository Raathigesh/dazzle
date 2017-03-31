<h1 align="center">
  <img src="https://raw.githubusercontent.com/Raathigesh/Dazzle/master/docs/Dazzle.png" alt="Dazzle">
   <br>
  React Dazzle
  <br>
  <h4 align="center">Dashboards made easy in React JS</h4>
</h1>

<p align="center">
  <a href="https://github.com/Raathigesh/Dazzle/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/express.svg?maxAge=2592000&style=flat-square"
         alt="License">
  </a>
  <a href="https://www.npmjs.com/package/react-dazzle">
    <img src="https://img.shields.io/npm/v/react-dazzle.svg?style=flat-square"
         alt="NPM Version">
  </a>
  <a href="https://travis-ci.org/Raathigesh/Dazzle">
    <img src="https://img.shields.io/travis/Raathigesh/dazzle.svg?style=flat-square"
         alt="Travis Build">
  </a>
  <a href="https://codecov.io/github/Raathigesh/Dazzle?branch=master">
    <img src="https://img.shields.io/codecov/c/github/Raathigesh/Dazzle.svg?style=flat-square" alt="Coverage via Codecov" />
  </a>
</p>
<br>

Dazzle is a library for building dashboards with React JS. Dazzle does not depend on any front-end libraries but it makes it easier to integrate with them.

Dazzle's goal is to be flexible and simple. Even though there are some UI components readily available out of the box, you have the complete control to override them as you wish with your own styles and layout.

## Features
- Grid based layout
- Add/Remove widgets
- Drag and drop widget re-ordering
- UI framework agnostic
- Simple yet flexible
- Well documented (It's a feature! Don't you think?)

## Installation
```
$ npm install react-dazzle --save
```

## Dazzle me
[Here is a demo.](http://raathigesh.com/dazzle) Widgets shows fake data though but they look so damn cool (At least for me).

###### [Repository of the demo is available here.](https://github.com/Raathigesh/Dazzle-Starter-Kit)

## Usage
```javascript
import React, { Component } from 'react';
import Dashboard from 'react-dazzle';

// Your widget. Just another react component.
import CounterWidget from './widgets/CounterWidget';

// Default styles.
import 'react-dazzle/lib/style/style.css';

class App extends Component {
  constructor() {
    this.state = {      
      widgets: {
        WordCounter: {
          type: CounterWidget,
          title: 'Counter widget',
        }
      },
      layout: {
        rows: [{
          columns: [{
            className: 'col-md-12',
            widgets: [{key: 'WordCounter'}],
          }],
        }],
      }
    };
  }

  render() {
    return <Dashboard  widgets={this.state.widgets} layout={this.state.layout}  />
  }
}
```

## API
| Props | Type| Description | Required |
| --- | --- | --- | --- |
| layout | Object | Layout of the dashboard. | Yes |
| widgets | Object| Widgets that could be added to the dashboard. | Yes |
| editable | Boolean |Indicates whether the dashboard is in editable mode. | No |
| rowClass | String |CSS class name(s) that should be given to the row div element. Default is `row`. | No |
| editableColumnClass | String |CSS class name(s) that should be used when a column is in editable mode. | No |
| droppableColumnClass  | String |CSS class name(s) that should be used when a widget is about to be dropped in a column. | No |
| frameComponent | Component | Customized frame component which should be used instead of the default frame. [More on custom frame component.](https://github.com/Raathigesh/Dazzle/blob/master/docs/ImplementingACustomFrame.md) | No |
| addWidgetComponent | Component | Customized add widget component which should be used instead of the default AddWidget component. [More on custom add widget component.](https://github.com/Raathigesh/Dazzle/blob/master/docs/ImplementingCustomAddWidgetButton.md) | No |
| addWidgetComponentText | String | Text that should be displayed in the Add Widget component. Default is `Add Widget`. | No |
| onAdd(layout, rowIndex, columnIndex) | function |Will be called when user clicks the `AddWidget` component.| No |
| onRemove(layout) | function |Will be called when a widget is removed.| No |
| onMove(layout) | function | Will be called when a widget is moved.| No |

#### Providing `widgets`
`widgets` prop of the dashboard component takes an object. A sample `widgets` object would look like below. This object holds all the widgets that could be used in the dashboard.

```javascript
{
  HelloWorldWidget: {
    type: HelloWorld,
    title: 'Hello World Title',
    props: {
      text: 'Hello Humans!'
    }
  },
  AnotherWidget: {
    type: AnotherWidget,
    title: 'Another Widget Title'
  }
 }
 ```
 - `type` property - Should be a React component function or class.
 - `title` property - Title of the widget that should be displayed on top of the widget.
 - `props` property - Props that should be provided to the widget.


#### Dashboard `layout`
The `layout` prop takes the current layout of the dashboard. Layout could have multiple rows and columns. A sample layout object with a single row and two columns would look like below.

```javascript
{
  rows: [{
    columns: [{
      className: 'col-md-6 col-sm-6 col-xs-12',
      widgets: [{key: 'HelloWorldWidget'}]
    }, {
      className: 'col-md-6 col-sm-6 col-xs-12',
      widgets: [{key: 'AnotherWidget'}]
    }]
  }]
}
```
- `className`  property - CSS class(es) that should be given to the column in  the grid layout. Above sample layout uses the classes from bootstrap library. You could use the classes of your CSS library.
- `widgets` property - An array of widgets that should be rendered in that particular column. `key` property of the widgets array should be a key from the `widgets` object.

#### Edit mode
Setting `editable` prop to `true` will make the dashboard editable.

#### Add new widget
When user tries to add a new widget, the `onAdd` callback will be called. <a href="https://github.com/Raathigesh/Dazzle/blob/master/docs/AddWidget.md">More info here on how to handle widget addition.</a>

#### Remove a widget
When a widget is removed, `onRemove` method will be called and new layout (The layout with the widget removed) will be available as an argument of `onRemove` method. Set the provided layout again to the dashboard to complete the widget removal. [The Sample repository has the this feature implemented](https://github.com/Raathigesh/Dazzle-Starter-Kit/blob/master/src/components/Dashboard.jsx).

## Customization

#### Implementing custom `WidgetFrame` component
A frame is the component which surrounds a widget. A frame has the title and the close button. Dazzle provides a default frame out of the box. But if you want, you can customize the frame as you like. <a href="https://github.com/Raathigesh/Dazzle/blob/master/docs/ImplementingACustomFrame.md">More info here.</a>

#### Implementing custom `AddWidget` component
Dazzle also allows you to customize the `Add Widget` component which appears when you enter edit mode. <a href="https://github.com/Raathigesh/Dazzle/blob/master/docs/ImplementingCustomAddWidgetButton.md">More info here.</a>

## Issues
- Improve drag and drop experience ([#1](https://github.com/Raathigesh/Dazzle/issues/1))

## License
MIT © [Raathigeshan](https://twitter.com/Raathigeshan)
