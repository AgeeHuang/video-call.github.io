import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ClientStatus from './ClientStatus';
import LocalStream from './LocalStream';
import RemoteStreamList from './RemoteStreamList';

export default function IndexPage () {
  return (
    <Container className="min-vw-100 min-vh-100 bg-dark">
      <ClientStatus />
      <Row xs={1} sm={2} className="m-0 p-5">
        <Col className="p-1">
          <LocalStream />
        </Col>
        <RemoteStreamList />
      </Row>
    </Container>
  );
}
