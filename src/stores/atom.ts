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

export const musicFromQueue = atom({
  key: 'musicFromQueue',
  default: {} as Track,
});

export const musicFromQueuePlay = atom({
  key: 'musicFromQueuePlay',
  default: false,
});
