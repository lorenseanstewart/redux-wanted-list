import React from 'react';

export const Note = (props) => {
  return (
    <div>
      <div className="card-body">
        {props.edit
          ? <textarea
              onChange={props.handleReasonChange}
              className="form-input"
              value={props.content}
              rows="6" />
          : <p>{props.content}</p>}
      </div>
      <div className="card-footer btn-right">
        {props.edit
          ? <SaveButton updatePerson={props.updatePerson} />
          : <EditButton toggleEdit={props.toggleEdit} />}
      </div>
    </div>
  );
}

const EditButton = (props) => {
  return (
    <button
      onClick={props.toggleEdit}
      className="btn btn-link">
      Edit
    </button>
  );
}

const SaveButton = (props) => {
  return (
    <button
      onClick={props.updatePerson}
      className="btn btn-primary">
      Save
    </button>
  );
}
