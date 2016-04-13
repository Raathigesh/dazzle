import React from 'react';
import Dashboard, { addWidget } from '../../lib';

import cloneDeep from 'lodash.clonedeep';

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
          name: 'HelloWorld',
          type: HelloWorld
        }
      },
      editMode: false
    };
  }

  onRemove = (layout) => {
    this.setState({
      layout: cloneDeep(layout)
    })
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
        <button onClick={this.toggleEdit}>Edit</button>
        <Dashboard onRemove={this.onRemove} layout={this.state.layout} widgets={this.state.widgets} editable={this.state.editMode} onAdd={this.onAdd} frame={FlatFrame}>
        </Dashboard>
      </div>
    </div>
    );
  }
}

export default App;
