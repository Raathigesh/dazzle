import * as React from "react";
import { PropTypes, Component } from 'react';
import * as Modal from 'react-modal';

interface IProps {
  widgets: any;
  isModalOpen: boolean;
  onRequestClose: any;
  onWidgetSelect: Function;
}

class AddWidgetDialog extends Component<IProps, {}> {
  static propTypes = {
    widgets: PropTypes.object,
    isModalOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onWidgetSelect: PropTypes.func,
  }
  render() {
    const { widgets, isModalOpen, onRequestClose, onWidgetSelect} = this.props;
    const widgetItems = Object.keys(widgets).map(widget => {
      return (
        <div className="list-group" key={widget}>
          <a href="#" className="list-group-item" onClick={() => onWidgetSelect(widget)}>
            <h6 className="list-group-item-heading">{widgets[widget].title}</h6>
          </a>
        </div>
      );
    });
    return (
      <Modal
        className="Modal__Bootstrap modal-dialog"
        isOpen={isModalOpen}
        contentLabel="Add Widget Dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onRequestClose}>
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
            <h4 className="modal-title">Add a widget</h4>
          </div>
          <div className="modal-body">
            <h5>Pick a widget to add</h5>
            {widgetItems}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={onRequestClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={onRequestClose}>Add</button>
          </div>
        </div>
      </Modal>
    );
  };
}

export default AddWidgetDialog;
