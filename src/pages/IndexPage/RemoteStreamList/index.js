import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useRemoteStream } from '@/hooks';
import { useClientStore } from '@/store/ClientStore';
import StreamVideo from '@/components/StreamVideo';

export default function RemoteStreamList () {
  const { client } = useClientStore();
  const [streamList] = useRemoteStream(client);
  if (!streamList.length) {
    return (
      <Col className="p-1">
        <StreamVideo />
      </Col>
    );
  }
  return (
    <Row xs={1} md={streamList.length >= 2 ? 2 : 1} className="m-0 px-sm-1">
      {
        streamList.map(stream => (
          <Col key={stream.getId()} className="p-1">
            <StreamVideo stream={stream} />
          </Col>
        ))
      }
    </Row>
  );
}
