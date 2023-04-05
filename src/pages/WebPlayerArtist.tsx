import React from 'react';
import styled from 'styled-components';
import MainViewFooter from '../components/molecules/MainViewFooter';
import WebPlayerTopBar from '../components/molecules/WebPlayerTopBar';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import ArtistTopDiv from '../components/molecules/ArtistTopDiv';
import { url } from 'inspector';

const MainView = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  grid-area: main-view;
  min-height: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  min-width: 520px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
  box-sizing: border-box; // box크기에 padding영역과 border영역을 포함해준다.
  gap: 24px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px;
    background: rgba(233, 7, 53, 0.4); // 차이 두기 위해 색깔 추가
  }
  &::-webkit-scrollbar-thumb {
    height: 10%; // 알아서 자동 설정이라 사실 무의미.
    background: #217af4;
  }
`;

const TopDivData = {
  imgSrc: 'https://t1.daumcdn.net/cfile/tistory/999FDF3E5BDD225116',
  artistName: 'Red Velvet',
};
const LikeData = [
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00004851d5d11b6ac4242aaa41c8be69',
    music: 'ONLY',
    artist: '이하이',
    album: '4 ONLY',
    update: '6일 전',
    time: 240,
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
    time: 180,
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
    time: 186,
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
    time: 235,
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

const WebPlayerArtist = () => {
  return (
    <>
      <WebPlayerTopBar />
      <MainView>
        <Section>
          <ArtistTopDiv data={TopDivData} num={LikeData.length} />
          <PlaylistMidDiv />
          <PlaylistBottomDiv data={LikeData} />
        </Section>
        <MainViewFooter />
      </MainView>
    </>
  );
};

export default WebPlayerArtist;
