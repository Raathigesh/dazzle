import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../lib/components/Dashboard.jsx';
import cloneDeep from 'lodash.clonedeep';
import 'flexboxgrid';

import HelloWorld from './widgets/HelloWorld';
import FlatFrame from './FlatFrame';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
    		rows: [{
    			columns: [{
    				className: 'col-xs-6 col-sm-6 col-md-6 col-lg-6',
    				widgets: [{name: 'HelloWorld', key:'first'}]
    			}, {
    				className: 'col-xs-6 col-sm-6 col-md-6 col-lg-6',
    				widgets: [{name: 'HelloWorld', key: 'second'}]
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
    	layout.rows[rowIndex].columns[columnIndex].widgets.push({
        name: 'HelloWorld',
        key: 'third'
      });

      this.setState({
        editMode: !this.state.editMode
      });
  }

  render () {
    return (
      <div>
        <button onClick={this.toggleEdit}>Edit</button>
        <Dashboard onRemove={this.onRemove} layout={this.state.layout} widgets={this.state.widgets} editable={this.state.editMode} onAdd={this.onAdd} frame={FlatFrame}>
        </Dashboard>
      </div>
    );
  }
}

export default App;
