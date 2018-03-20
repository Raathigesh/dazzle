import React from 'react';

const TestComponent = () => {
  return (
    <div />
  );
};

const TestTitleComponent = (props) => {
  return (
    <div {...{ tryProp: "try" + props.title, ...props }}>try{props.title}</div>
  );
};

export { TestComponent, TestTitleComponent };
