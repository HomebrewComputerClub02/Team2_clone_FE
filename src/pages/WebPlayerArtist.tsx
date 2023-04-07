import React from 'react';
import styled from 'styled-components';
import MainViewFooter from '../components/molecules/MainViewFooter';
import WebPlayerTopBar from '../components/molecules/WebPlayerTopBar';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import ArtistTopDiv from '../components/molecules/ArtistTopDiv';
import ArtistMidDiv from '../components/molecules/ArtistMidDiv';
import ArtistBottomDiv from '../components/molecules/ArtistBottomDiv';

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
  mainColor: 'rgb(128, 120, 96)',
};
const PopularData = [
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e02df5022bdf1ac4bf52135c4be',
    music: 'Psycho',
    play: 379131914,
    time: 210,
    musicLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e028c4a282e84a53c1c8acf129a',
    music: 'Feel My Rhythm',
    play: 106643964,
    time: 210,
    musicLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e02b64001fa6292caefc7605550',
    music: 'Bad Boy',
    play: 237760258,
    time: 210,
    musicLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e023f30a062dafcdbc1a8fad842',
    music: '러시안 룰렛(Russian Roulette)',
    play: 160306514,
    time: 211,
    musicLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e026538b8e1b5c7b2a9d2211769',
    music: '피카부 (Peek-A-Boo)',
    play: 176418553,
    time: 189,
    musicLink: '',
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
          <ArtistTopDiv data={TopDivData} />
          <ArtistMidDiv mainColor={TopDivData.mainColor} />
          <ArtistBottomDiv data={PopularData} />
        </Section>
        <MainViewFooter />
      </MainView>
    </>
  );
};

export default WebPlayerArtist;
