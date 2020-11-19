import React from 'react';
import { Row, Button, Col } from 'react-bootstrap';
import { useClientStore } from '@/store/ClientStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

export default function ClientStatus () {
  const { uid, init, loading, error } = useClientStore();
  const createClient = () => {
    init({
      key: process.env.AGORA_APP_ID,
      token: process.env.AGORA_TEMP_TOKEN,
      channel: process.env.AGORA_CHANNEL
    })
  }
  return (
    <Row className="client-status justify-content-center py-3 text-light">
      {
        error && (
          <Col xs={12} className="text-danger text-center">
            {error}
          </Col>
        )
      }
      {
        uid ? (
          <div>
            Your UID: {uid}
          </div>
        ) : (
          <Button
            variant="primary"
            onClick={createClient}
            disabled={loading}
            className="client-status__join"
          >
            {
              loading ? (
                <FontAwesomeIcon className="fa-spin" icon="spinner" />
              ) : 'Join the channel!'
            }
          </Button>
        )
      }
    </Row>
  );
}
