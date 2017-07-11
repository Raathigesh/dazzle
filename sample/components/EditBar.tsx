import * as React from "react";
import { PropTypes, Component } from 'react';
interface IProps {
  onEdit: any;
}
class EditBar extends Component<IProps, {}> {
  static propTypes = {
    onEdit: PropTypes.func,
  };
  render() {
    const { onEdit } = this.props;
    return (
      <div className="row edit-bar">
        <div className="col-sm-12 text-right">
          <button type="button" className="btn btn-default btn-xs" onClick={onEdit}>
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            Edit
          </button>
        </div>
      </div>
    );
  }
};

export default EditBar;
