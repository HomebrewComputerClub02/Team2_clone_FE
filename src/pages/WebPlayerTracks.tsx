import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlaylistTopDiv from '../components/molecules/PlaylistTopDiv';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';

const TopDivData = {
  imgSrc: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
  playlistName: '좋아요 표시한 곡',
};
const LikeData = [
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00004851d5d11b6ac4242aaa41c8be69',
    music: 'ONLY',
    artist: '이하이',
    album: '4 ONLY',
    update: '6일 전',
    time: '4:00',
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209',
    music: 'Attention',
    artist: 'NewJeans',
    album: "NewJeans 1st EP 'New Jeans'",
    update: '4주 전',
    time: '3:00',
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00004851580ac3ad7dfc81e509171120',
    music: 'Pink Venom',
    artist: 'BLACKPINK',
    album: 'BORN PINK',
    update: '4주 전',
    time: '3:06',
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209',
    music: 'Cookie',
    artist: 'NewJeans',
    album: "NewJeans 1st EP 'New Jeans'",
    update: '4주 전',
    time: '3:55',
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
];

const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: -24px;
  margin-left: -24px;
  margin-right: -24px;
`;

const WebPlayerTracks = () => {
  return (
    <Section>
      <PlaylistTopDiv data={TopDivData} num={LikeData.length} />
      <PlaylistMidDiv />
      <PlaylistBottomDiv data={LikeData} />
    </Section>
  );
};

export default WebPlayerTracks;
