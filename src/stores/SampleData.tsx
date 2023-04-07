import { MusicProfileProps } from '../components/molecules/MusicProfile';

export const MusicProfilePropsSample: MusicProfileProps = {
  ImgSrc: 'images/GoogleLogo.png',
  artist: 'hongjin',
  song: "don't cry",
};

export interface Track {
  imgSrc: string;
  title: string;
  artist: string;
  album: string;
  update: string;
  time: string;
  musicLink: string;
  artistLink: string;
  albumLink: string;
}

export const Tracks: Track[] = [
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00004851d5d11b6ac4242aaa41c8be69',
    title: 'ONLY',
    artist: '이하이',
    album: '4 ONLY',
    update: '6일 전',
    time: '4:00',
    musicLink: '/mp3/dontcry.mp3',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209',
    title: 'Attention',
    artist: 'NewJeans',
    album: "NewJeans 1st EP 'New Jeans'",
    update: '4주 전',
    time: '3:00',
    musicLink: '/mp3/dontcry.mp3',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00004851580ac3ad7dfc81e509171120',
    title: 'Pink Venom',
    artist: 'BLACKPINK',
    album: 'BORN PINK',
    update: '4주 전',
    time: '3:06',
    musicLink: '/mp3/dontcry.mp3',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209',
    title: 'Cookie',
    artist: 'NewJeans',
    album: "NewJeans 1st EP 'New Jeans'",
    update: '4주 전',
    time: '3:55',
    musicLink: '/mp3/dontcry.mp3',
    artistLink: '',
    albumLink: '',
  },
];

export const TopDivData = {
  imgSrc: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
  playlistName: '좋아요 표시한 곡',
};
