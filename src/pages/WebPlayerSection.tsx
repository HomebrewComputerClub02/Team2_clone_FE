import React from 'react';
import styled from 'styled-components';
import MainViewFooter from '../components/molecules/MainViewFooter';
import Section from '../components/molecules/Section';

const GridData = {
  title: '최근 재생한 항목',
  body: [
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e02580ac3ad7dfc81e509171120',
      title: 'BORN PINK',
      titleLink: '/album',
      artist: 'BLACKPINK',
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e021a8e7c237aca188a1e314af3',
      title: '4TH WALL',
      titleLink: '/album',
      artist: 'Ruel',
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209',
      title: "NewJeans 1st EP 'New Jeans'",
      titleLink: '/album',
      artist: 'NewJeans',
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67706f00000002f36e4a301bc00c44b2c944d9',
      title: 'Korean OST Instrumentals',
      titleLink: '/album',
      artist: "Enjoy your favourite K-drama's OST instrumentals.",
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://seeded-session-images.scdn.co/v1/img/artist/3HqSLMAZ3g3d5poNaI7GOU/en',
      title: 'IU 라디오',
      titleLink: '/album',
      artist: '만든 사람: Spotify',
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab6761610000f1785704a64f34fe29ff73ab56bb',
      title: '방탄소년단',
      titleLink: '/album',
      artist: '아티스트',
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e02278d6cf14513bd97cb580fe7',
      title: 'VIBE (feat. Jimin of BTS)',
      titleLink: '/album',
      artist: '태양, 지민',
      artistLink: '/artist',
    },
    {
      imgSrc:
        'https://i.scdn.co/image/ab67616d00001e025e8286ff63f7efce1881a02b',
      title: 'on the street (with J. Cole)',
      titleLink: '/album',
      artist: 'j-hope, J. Cole',
      artistLink: '/artist',
    },
  ],
};

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

const WebPlayerSection = () => {
  return (
    <MainView>
      <Section data={GridData} dataNum={10} show={false} />
      <MainViewFooter />
    </MainView>
  );
};

export default WebPlayerSection;
