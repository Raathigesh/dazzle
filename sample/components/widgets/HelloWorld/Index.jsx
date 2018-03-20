import React from 'react';
const HelloWorld = (props) => (
  <div>
    Row:{props.rowIndex}-Column:{props.columnIndex}-Widget{props.widgetIndex}
    <img src="http://static.simpledesktops.com/uploads/desktops/2013/08/09/space-RGB-01.png.625x385_q100.png" width="325px" />
  </div>
);

export default HelloWorld;
