## Implementing a Custom Widget Frame
A widget frame is an element which surrounds a widget. Widget frame contains the title of the widget and the close button.

Dazzle comes with a default frame built it. By default this frame will be used when displaying widgets in the dashboard. If you don't like the style of this frame or you need to implement some additional functionality into the frame, you could build your own fancy frame and ask Dazzle to use your frame instead of the default.

### How To Build A Custom Frame?

```
const CustomFrame = ({title, editable, children, onRemove }) => {
  return (
      <div className="custom-frame-container">
        <div className="custom-frame-title">
            <h2>{title}</h2>
            {editable &&<a onClick={() => {onRemove();}} >Remove</a>}
        </div>
        <div className="custom-frame-content">
          {children}
        </div>
    </div>
  );
};
```

A custom frame is just another React component. Custom frame will be provided with 4 properties you can make use of as follows.

| Props | Description |
| --- | --- |
|title | Title that should be displayed in the frame.|
|editable | Denotes weather the dashboard is in editable mode or not. |
|children | Children of the frame. The widget that is going to be rendered. |
|onRemove | The function that should be called when you want to remove the widget. |

### How To Provide Custom Frame To Dazzle?
```
import Dashboard from 'react-dazzle';
import CustomFrame from './CustomFrame';

<Dashboard /* Other props goes here*/ frame={CustomFrame}  />
```

Yep! That's all! Now all the widgets will use your fancy frame.
