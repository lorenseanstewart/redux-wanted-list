import React from 'react';

const Toast = (props) => {
  return (
    <div className="toast toast-primary">
      <button
        onClick={props.dismiss}
        className="btn btn-clear float-right"></button>
      {props.message}
    </div>
  );
}

export default Toast;
