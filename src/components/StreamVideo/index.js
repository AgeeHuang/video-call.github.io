import React, { useEffect, memo } from 'react';
import './index.css';

function StreamVideo ({ stream }) {
  const id = stream ? `stream-video-${stream.getId()}` : '';
  useEffect(() => {
    if (id) {
      stream.play(id, { fit: 'contain' });
    }
  }, [id])
  return (
    <div className="stream-video">
      { id && <div className="w-100 h-100 stream-video__content" id={id} /> }
    </div>
  );
}

export default memo(StreamVideo);
