import React, { Fragment } from 'react';

import { useClientStore } from '@/store/ClientStore';
import StreamVideo from '@/components/StreamVideo';
import AudioControl from './AudioControl';
import LeaveControl from './LeaveControl';
import VideoControl from './VideoControl';

import './index.css';

export default function LocalStream () {
  const { stream, uid } = useClientStore();
  return (
    <Fragment>
      <StreamVideo stream={stream} />
      {
        uid && (
          <div className="py-2 text-center">
            <LeaveControl />
            <AudioControl />
            <VideoControl />
          </div>
        )
      }
    </Fragment>
  );
}