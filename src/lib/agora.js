import AgoraRTC from "agora-rtc-sdk";
// import { findLaterVersion } from '@/utils';

export function createClient (config) {
  return AgoraRTC.createClient({
    mode: 'rtc',
    codec: 'vp8',
    ...config,
  });
}

export function joinChannel (client, token, channel) {
  return new Promise((resolve, reject) => {
    client.join(token, channel, null,
      uid => { resolve(uid) },
      err => { reject(err) }
    )
  })
}

export function createStream (config) {
  return AgoraRTC.createStream({
    video: true,
    audio: true,
    screen: false,
    ...config,
  })
}

export function initStream (stream) {
  return new Promise((resolve, reject) => {
    stream.init(
      () => { resolve(); },
      err => { reject(err); },
    )
  });
}

export function leaveChannel (client) {
  return new Promise((resolve, reject) => {
    client.leave(
      () => { resolve() },
      err => { reject(err) }
    );
  })
}
