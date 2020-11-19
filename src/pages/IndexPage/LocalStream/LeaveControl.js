import React from 'react';

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClientStore } from '@/store/ClientStore';

export default function LeaveControl () {
  const { uid, handleLeave } = useClientStore();
  const iconColor = uid ? 'text-danger' : 'text-info';
  const className = [iconColor, 'rounded-circle', 'shadow-none', 'local-stream__button'];
  return (
    <Button
      onClick={handleLeave}
      className={className}
      variant="secondary"
    >
      <FontAwesomeIcon icon="phone-slash" />
    </Button>
  );
}