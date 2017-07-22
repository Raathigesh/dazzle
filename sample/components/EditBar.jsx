import React from 'react';
import PropTypes from 'prop-types';

const EditBar = ({ onEdit }) => (
  <div className="row edit-bar">
    <div className="col-sm-12 text-right">
      <button type="button" className="btn btn-default btn-xs" onClick={onEdit}>
        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          Edit
        </button>
    </div>
  </div>
);

EditBar.propTypes = {
  onEdit: PropTypes.func,
};

export default EditBar;
