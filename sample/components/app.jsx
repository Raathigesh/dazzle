import React from 'react';
import Dashboard, { addWidget } from '../../lib';

// App Components
import Header from './Header';
import EditBar from './EditBar';
import Container from './Container';

// Widgets
import HelloWorld from './widgets/HelloWorld';
import AnotherWidget from './widgets/AnotherWidget';
import AddWidgetDialog from './AddWidgetDialog';
 // import CustomAddWidgetButton from './CustomAddWidgetButton';

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
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{key: 'RocketWidget'}, {key: 'AlienWidget'}, {key: 'RocketWidget'}],
          }, {
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{key: 'RocketWidget'}],
          }, {
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{key: 'RocketWidget'}],
          }],
        }, {
          columns: [{
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{key: 'RocketWidget'}],
          }, {
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{key: 'RocketWidget'}],
          }, {
            className: 'col-md-4 col-sm-6 col-xs-6',
            widgets: [{key: 'RocketWidget'}],
          }],
        }],
      },
      widgets: {
        RocketWidget: {
          type: HelloWorld,
          title: 'Rocket Widget',
        },
        AlienWidget: {
          type: AnotherWidget,
          title: 'Alien Widget',
        },
      },
      editMode: false,
      isModalOpen: false,
      addWidgetOptions: null,
    };
  }

  onRemove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  onAdd = (layout, rowIndex, columnIndex) => {
    this.setState({
      isModalOpen: true,
      addWidgetOptions: {
        layout,
        rowIndex,
        columnIndex,
      },
    });
  }

  onMove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  onRequestClose = () => {
    this.setState({
      isModalOpen: false,
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
        addWidgetComponentText="Add"
        onAdd={this.onAdd}
        onMove={this.onMove}
        />
      <AddWidgetDialog widgets={this.state.widgets} isModalOpen={this.state.isModalOpen} onRequestClose={this.onRequestClose} onWidgetSelect={this.widgetSelected}/>
    </Container>
    );
  }

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  widgetSelected = (widgetName) => {
    const {layout, rowIndex, columnIndex} = this.state.addWidgetOptions;
    this.setState({
      layout: addWidget(layout, rowIndex, columnIndex, widgetName),
    });
    this.onRequestClose();
  }
}

export default App;
