import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClientStore } from '@/store/ClientStore';

export default function VideoControl () {
  const { muteVideo, handleVideoMute } = useClientStore();
  const iconColor = muteVideo ? 'text-danger' : 'text-info';
  const className = [iconColor, 'rounded-circle', 'shadow-none', 'local-stream__button'];
  return (
    <Button
      className={className}
      onClick={handleVideoMute}
      variant="secondary"
    >
      {
        muteVideo ? (
          <FontAwesomeIcon icon="video" />
        ) : (
          <FontAwesomeIcon icon="video-slash" />
        )
      }
    </Button>
  );
}