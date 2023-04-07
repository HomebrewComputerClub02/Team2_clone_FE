import { atom } from 'recoil';
import { Track } from './SampleData';

export const screenSize = atom({
  key: 'screenSize',
  default: '',
});

export const audioVolume = atom({
  key: 'audioVolume',
  default: 0.5,
});

export const GlobalTracks = atom({
  key: 'globalTracks',
  default: [
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00004851d5d11b6ac4242aaa41c8be69',
      music: 'ONLY',
      artist: '이하이',
      album: '4 ONLY',
      update: '6일 전',
      time: 240,
      musicLink: '/mp3/dontcry.mp3',
      artistLink: '',
      albumLink: '',
    },
  ] as Track[],
});

export const GlobalTracksIndex = atom({
  key: 'GlobalTracksIndex',
  default: 0,
});

export const GlobalPlay = atom({
  key: 'GlobalPlay',
  default: false,
});
