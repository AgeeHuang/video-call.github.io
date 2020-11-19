import { useState, useEffect } from 'react';

export const useRemoteStream = client => {
  // const [localStream, setLocalStream] = useState(null);
  const [remoteStreamList, setRemoteStreamList] = useState([]);
  useEffect(() => {
    // console.log('---@trigger useEffect', client)
    // const handleLocalStreamPublished = ({ stream }) => {
    //   console.log(stream);
    // }
    const handleRemoteStreamAdded = event => {
      const { stream } = event;
      client.subscribe(stream);
    }
    const handleRemoteStreamSubscribed = event => {
      const { stream } = event;
      setRemoteStreamList(state => ([
        ...state,
        stream,
      ]));
    }
    const handleRemoteStreamRemoved = event => {
      const { stream } = event;
      if (stream) {
        const id = stream.getId();
        stream.close();
        setRemoteStreamList(state => {
          // const streamIndex = state.findIndex(stream => stream.getId() === id);
          // state.splice(streamIndex, 1);
          // return state;
          return state.filter(stream => stream.getId() !== id);
        });
      }
    }
    const handleClientStateChange = event => {
      const { curState } = event;
      switch (curState) {
        case 'DISCONNECTED':
          setRemoteStreamList([]);
      }
    }
    if (client) {
      // client.on('stream-published', handleLocalStreamPublished);
      client.on('stream-added', handleRemoteStreamAdded);
      client.on('stream-subscribed', handleRemoteStreamSubscribed);
      client.on('stream-removed', handleRemoteStreamRemoved);
      client.on('peer-leave', handleRemoteStreamRemoved);
      client.on('connection-state-change', handleClientStateChange);
    }
    return () => {
      if (client) {
        // client.off('stream-published', handleLocalStreamPublished);
        // client.off('stream-added', handleRemoteStreamAdded);
        client.off('stream-subscribed', handleRemoteStreamSubscribed);
        client.off('peer-leave', handleRemoteStreamRemoved);
        client.off('stream-removed', handleRemoteStreamRemoved);
        client.off('connection-state-change', handleClientStateChange);
      }
    }
  }, [client])
  return [remoteStreamList];
}
