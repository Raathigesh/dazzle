import React from 'react';
import Dashboard, { addWidget } from '../../lib';
import Header from './Header';
import EditBar from './EditBar';
import Container from './Container';
import HelloWorld from './widgets/HelloWorld';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/custom.css';
import '../../lib/style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        rows: [{
          columns: [{
            className: 'col-md-4 col-sm-6 col-xs-12',
            widgets: [{name: 'HelloWorld'}],
          }, {
            className: 'col-md-4 col-sm-6 col-xs-12',
            widgets: [{name: 'HelloWorld'}],
          }, {
            className: 'col-md-4 col-sm-6 col-xs-12',
            widgets: [],
          }],
        }],
      },
      widgets: {
        HelloWorld: {
          type: HelloWorld,
          title: 'Sample Hello World App',
        },
      },
      editMode: false,
    };
  }

  onRemove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  onAdd = (layout, rowIndex, columnIndex) => {
    this.setState({
      layout: addWidget(layout, rowIndex, columnIndex, 'HelloWorld'),
    });
  }

  render() {
    return (
    <Container>
      <Header />
      <EditBar onEdit={this.toggleEdit} />
      <Dashboard
        onRemove={this.onRemove}
        layout={this.state.layout}
        widgets={this.state.widgets}
        editable={this.state.editMode}
        onAdd={this.onAdd}
        />
    </Container>
    );
  }

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };
}

export default App;
