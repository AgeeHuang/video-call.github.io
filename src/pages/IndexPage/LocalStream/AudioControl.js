import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClientStore } from '@/store/ClientStore';

export default function AudioControl () {
  const { muteAudio, handleAudioMute } = useClientStore();
  const iconColor = muteAudio ? 'text-danger' : 'text-info';
  const className = [iconColor, 'rounded-circle', 'shadow-none', 'local-stream__button'];
  return (
    <Button
      className={className}
      onClick={handleAudioMute}
      variant="secondary"
    >
      {
        muteAudio ? (
          <FontAwesomeIcon icon="microphone" />
        ) : (
          <FontAwesomeIcon icon="microphone-slash" />
        )
      }
    </Button>
  );
}