import update from 'immutability-helper';

export function isValidDate(date) {
  return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
}

/**
 * Adds the specified widget to the specified position in the layout.
 */
export function addWidget(layout, rowIndex, columnIndex, widgetName, title, props) {
  let toAdd = {
    key: widgetName
  }
  if(title){
    toAdd.title=title;
  }
  if(props){
    toAdd.props=props;
  }
  return update(layout, {
    rows: {
      [rowIndex]: {
        columns: {
          [columnIndex]: {
            widgets: {
              $push: [toAdd],
            },
          },
        },
      },
    },
  });
}

/**
 * Removes the widget at a specified index.
 */
export function removeWidget(layout, rowIndex, columnIndex, widgetIndex) {
  return update(layout, {
    rows: {
      [rowIndex]: {
        columns: {
          [columnIndex]: {
            widgets: {
              $splice: [
                [widgetIndex, 1],
              ],
            },
          },
        },
      },
    },
  });
}

/**
 * Moves a widget from column to column.
 */
export function moveWidget(layout, initialLocation, destination, widgetName, title, props) {
  /* eslint max-len: "off" */
  const removedLayout = removeWidget(layout, initialLocation.rowIndex, initialLocation.columnIndex, initialLocation.widgetIndex);
  const movedLayout = addWidget(removedLayout, destination.rowIndex, destination.columnIndex, widgetName, title, props);
  return movedLayout;
}

/**
 * Sorts a widget in the same column.
 */
export function sortWidget(layout, initialLocation, destination, widgetName, title, props) {
  return update(layout, {
    rows: {
      [initialLocation.rowIndex]: {
        columns: {
          [initialLocation.columnIndex]: {
            widgets: {
              $splice: [
                [initialLocation.widgetIndex, 1],
                [destination.widgetIndex, 0, {
                  key: widgetName,
                  title,
                  props,
                }],
              ],
            },
          },
        },
      },
    },
  });
}
