import { atom } from 'recoil';

export const screenSize = atom({
  key: 'screenSize',
  default: '',
});

export const audioVolume = atom({
  key: 'audioVolume',
  default: 0.5,
});
