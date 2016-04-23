import update from 'react/lib/update';

/**
 * Adds the specified widget to the specified position in the layout.
 * @param {[type]} layout      The layout object itself
 * @param {[type]} rowIndex    Index of the row in the layout
 * @param {[type]} columnIndex Index of the column in the layout
 * @param {[type]} widgetName  Name of the widget that should be added
 * @return {[type]}            New layout
 */
export function addWidget(layout, rowIndex, columnIndex, widgetName) {
  return update(layout, {
      rows: {
          [rowIndex]: {
              columns: {
                  [columnIndex]: {
                      widgets: {
                          $push: [{
                              name: widgetName,
                          }]
                      }
                  }
              }
          }
      }
  });
}

/**
 * Removes the widget at a specified index.
 * @param  {[type]} layout      Layout of the dashboard
 * @param  {[type]} rowIndex    Index of the row where the widget is located
 * @param  {[type]} columnIndex Index of the column where the widget is located
 * @param  {[type]} widgetIndex Index of the widget itself
 * @return {[type]}             New layout
 */
export function removeWidget(layout, rowIndex, columnIndex, widgetIndex) {
    return update(layout, {
        rows: {
            [rowIndex]: {
                columns: {
                    [columnIndex]: {
                        widgets: {
                            $splice: [
                                [widgetIndex, 1]
                            ]
                        }
                    }
                }
            }
        }
    });
}

export function moveWidget(layout, initialLocation, destination, widgetName) {
    const removedLayout = removeWidget(layout, initialLocation.rowIndex, initialLocation.columnIndex, initialLocation.widgetIndex);
    const movedLayout = addWidget(removedLayout, destination.rowIndex, destination.columnIndex, widgetName);
    return movedLayout;
}

export function sortWidget(layout, initialLocation, destination, widgetName) {
    return update(layout, {
        rows: {
            [initialLocation.rowIndex]: {
                columns: {
                    [initialLocation.columnIndex]: {
                        widgets: {
                            $splice: [
                                [initialLocation.widgetIndex, 1],
                                [destination.widgetIndex, 0, {
                                    name: widgetName,
                                }]
                            ]
                        }
                    }
                }
            }
        }
    });
}
