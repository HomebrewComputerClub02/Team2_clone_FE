import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlaylistTopDiv from '../components/molecules/PlaylistTopDiv';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import MainViewFooter from '../components/molecules/MainViewFooter';
import WebPlayerTopBar from '../components/molecules/WebPlayerTopBar';
import { Tracks } from '../stores/SampleData';

const TopDivData = {
  imgSrc: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
  playlistName: '내 플레이리스트 #1',
  mainColor: 'rgb(128, 120, 96)',
};

const PlaylistData = [
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e02112b210accd05345a17a46f0',
    music: 'DREAM',
    artist: '수지',
    album: 'Dream',
    update: '4주 전',
    time: 222,
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209',
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
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e02a991995542d50a691b9ae5be',
    music: 'ANTIFRAGILE',
    artist: 'LE SSERAFIM',
    album: 'ANTIFRAGILE',
    update: '4주 전',
    time: 184,
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e028c7e7f435fdcc70772c5555e',
    music: 'Fine',
    artist: '태연',
    album: 'My Voice - The 1st Album',
    update: '4주 전',
    time: 209,
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01',
    music: 'OMG',
    artist: 'NewJeans',
    album: "NewJeans 'OMG'",
    update: '4주 전',
    time: 212,
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
];

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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: -24px;
  margin-left: -24px;
  margin-right: -24px;
`;

const WebPlayerPlaylist = () => {
  return (
    <>
      <WebPlayerTopBar />
      <MainView>
        <Section>
          <PlaylistTopDiv data={TopDivData} playlistData={Tracks} />
          <PlaylistMidDiv data={Tracks} mainColor={TopDivData.mainColor} />
          <PlaylistBottomDiv data={Tracks} />
        </Section>
        <MainViewFooter />
      </MainView>
    </>
  );
};

export default WebPlayerPlaylist;
