import React from 'react';
import Dashboard, { addWidget } from '../../lib';
import Header from './Header';
import HelloWorld from './widgets/HelloWorld';
import FlatFrame from './FlatFrame';

import '../css/bootstrap.min.css';
import '../css/custom.css';
import '../fonts/css/font-awesome.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
    		rows: [{
    			columns: [{
    				className: 'col-md-4 col-sm-6 col-xs-12',
    				widgets: [{name: 'HelloWorld', key:'first'}]
    			}, {
    				className: 'col-md-4 col-sm-6 col-xs-12',
    				widgets: [{name: 'HelloWorld', key: 'second'}]
    			}, {
    				className: 'col-md-4 col-sm-6 col-xs-12',
    				widgets: []
    			}]
    		}]
    	},
      widgets: {
        "HelloWorld": {
          type: HelloWorld,
          title: 'Sample Hello World App'
        }
      },
      editMode: false
    };
  }

  onRemove = (layout) => {
    this.setState({
      layout: layout
    });
  }

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  onAdd = (layout, rowIndex, columnIndex) => {
    this.setState({
      layout: addWidget(layout, rowIndex, columnIndex, 'HelloWorld')
    });
  }

  render () {
    return (
    <div className="container body">
      <div className="main_container">
        <Header />
        <div className="row">
          <div className="col-sm-12 text-right">
            <button type="button" className="btn btn-default btn-xs" onClick={this.toggleEdit}>
              <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                Edit
              </button>
          </div>
        </div>
        <Dashboard
          onRemove={this.onRemove}
          layout={this.state.layout}
          widgets={this.state.widgets}
          editable={this.state.editMode}
          onAdd={this.onAdd}
          frame={FlatFrame}
          />
      </div>
    </div>
    );
  }
}

export default App;
