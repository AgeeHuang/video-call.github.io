import create from 'zustand';
import {
  createClient,
  joinChannel,
  createStream,
  initStream,
  leaveChannel,
} from '@/lib/agora';

const initialState = {
  client: null,
  stream: null,
  uid: null,
  loading: false,
  joined: false,
  published: false,
  muteAudio: false,
  muteVideo: false,
  error: '',
};

export const useClientStore = create((set, get) => ({
  ...initialState,
  init: async config => {
    set({ ...initialState, loading: true });
    const { key, token, channel } = config;
    const client = createClient();
    client.init(key);
    set({ client });
    try {
      const uid = await joinChannel(client, token, channel);
      client.enableDualStream();
      const stream = createStream({ streamID: uid });
      await initStream(stream);
      client.publish(stream);
      set({ stream, uid, joined: true });
    } catch (err) {
      console.log('catch error', err);
      set({ error: err.info || err });
    } finally {
      set({ loading: false });
    }
  },
  handleLeave: async () => {
    const { client, stream } = get();
    client.unpublish(stream);
    stream.close();
    await leaveChannel(client);
    set({ ...initialState });
  },
  handleAudioMute: () => {
    const { stream, muteAudio } = get();
    const method = muteAudio ? 'unmuteAudio' : 'muteAudio';
    stream[method]();
    set(state => ({ muteAudio: !state.muteAudio }));
  },
  handleVideoMute: () => {
    const { stream, muteVideo } = get();
    const method = muteVideo ? 'unmuteVideo' : 'muteVideo';
    stream[method]();
    set(state => ({ muteVideo: !state.muteVideo }));
  },
}));

// useClientStore.subscribe(console.log, state => state.uid);
