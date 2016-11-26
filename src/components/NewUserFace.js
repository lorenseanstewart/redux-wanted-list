import React from 'react';

const NewUserFace = (props) => {
  return (
    <figure
      className="avatar avatar-xl">
      <label>Police sketch:</label>
      <img src={`https://api.adorable.io/avatars/face/eyes${props.eyes}/nose${props.nose}/mouth${props.mouth}/${props.skin.slice(1)}`} alt="New person avatar" />
    </figure>
  );
}

export default NewUserFace;
