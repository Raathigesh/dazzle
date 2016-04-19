## Add New Widget To Dashboard
When add widget is clicked, `onAdd` function will be called. The `onAdd` function will be provided with the active layout, index of the row and column where the new widget should be added.

Dazzle gives the responsibility of presenting the user with the UI where they can pick a widget to you.

You could show a modal dialog with all the widgets that could be added and allow the user to select one widget.

When user selects a widget, call the `addWidget` method with the name of the widget that should be added along with additional parameters.
