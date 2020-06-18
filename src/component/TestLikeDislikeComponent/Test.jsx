import React from 'react';
import { useDispatch } from 'react-redux';
import { watcherHandleLike } from '../../redux/actioncreators/actionsSaga';

function Test({ editedLook }) {
  const dispatch = useDispatch();

  function handleLike(id, status) {
    console.log('id:' + id, 'status:' + status);
    dispatch(watcherHandleLike(id, status));
  }
  return (
    <div style={{ color: 'white' }}>
      <button
        onClick={() => {
          handleLike(editedLook.id, 'like');
        }}
      >
        Like
      </button>{' '}
      <button
        onClick={() => {
          handleLike(editedLook.id, 'dislike');
        }}
      >
        Dislike
      </button>
    </div>
  );
}

export default Test;
