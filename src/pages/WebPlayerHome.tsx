import { debounce } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WebPlayerSection from '../components/molecules/WebPlayerSection';

const GridData = [
  {
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
    ],
  },
  {
    title: '인기 라디오',
    body: [
      {
        imgSrc:
          'https://seeded-session-images.scdn.co/v1/img/artist/6HvZYsbFfjnjFrWF950C9d/en',
        title: 'NewJeans 라디오',
        titleLink: '/album',
        artist: '만든 사람: Spotify',
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
          'https://seeded-session-images.scdn.co/v1/img/artist/6VuMaDnrHyPL1p4EHjYLi7/en',
        title: 'Charlie Puth 라디오',
        titleLink: '/album',
        artist: '만든 사람: Spotify',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://seeded-session-images.scdn.co/v1/img/artist/6zn0ihyAApAYV51zpXxdEp/en',
        title: '10cm 라디오',
        titleLink: '/album',
        artist: '만든 사람: Spotify',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://seeded-session-images.scdn.co/v1/img/artist/2SY6OktZyMLdOnscX3DCyS/en',
        title: 'JANNABI 라디오',
        titleLink: '/album',
        artist: '만든 사람: Spotify',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://seeded-session-images.scdn.co/v1/img/artist/4SpbR6yFEvexJuaBpgAU5p/en',
        title: 'LE SSERAFIM 라디오',
        titleLink: '/album',
        artist: '만든 사람: Spotify',
        artistLink: '/artist',
      },
    ],
  },
];

interface Data {
  title: string;
  body: Array<Item>;
}
interface Item {
  imgSrc: string;
  title: string;
  titleLink: string;
  artist: string;
  artistLink: string;
}

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

const WebPlayerHome = () => {
  // 화면 크기에 따라 렌더링하는 item수 설정.
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [dataNum, setDataNum] = useState(0);
  const calcWidth = (): void => {
    if (windowSize.width <= 770) setDataNum(2);
    else if (windowSize.width <= 970) setDataNum(3);
    else if (windowSize.width <= 1300) setDataNum(4);
    else if (windowSize.width <= 1500) setDataNum(5);
    else setDataNum(6);
  };
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    calcWidth();
  };

  useEffect(() => {
    calcWidth(); //처음에 보여줘야 할 아이템 개수 확인.
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MainView>
      {GridData.map((data: Data, index: number) => (
        <WebPlayerSection data={data} dataNum={dataNum} key={index} />
      ))}
    </MainView>
  );
};

export default WebPlayerHome;
