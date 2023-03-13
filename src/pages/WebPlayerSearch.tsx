import React, { useRef } from 'react';
import styled from 'styled-components';

const SearchData = [
  {
    title: '팟캐스트',
    bgColor: 'rgb(225, 51, 0)',
    imgSrc: 'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
    link: '/open',
  },
  {
    title: '라이브 이벤트',
    bgColor: 'rgb(115, 88, 255)',
    imgSrc:
      'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
    link: '/open',
  },
  {
    title: '나만의 플레이리스트',
    bgColor: 'rgb(30, 50, 100)',
    imgSrc: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    link: '/open',
  },
  {
    title: '최신 음악',
    bgColor: 'rgb(232, 17, 91)',
    imgSrc: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
    link: '/open',
  },
  {
    title: '가요',
    bgColor: 'rgb(45, 70, 185)',
    imgSrc: 'https://i.scdn.co/image/ab67fb8200005caf5a7a37ae85c166fb90eb9b5d',
    link: '/open',
  },
  {
    title: '팝',
    bgColor: 'rgb(20, 138, 8)',
    imgSrc: 'https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768',
    link: '/open',
  },
  {
    title: '힙합',
    bgColor: 'rgb(188, 89, 0)',
    imgSrc: 'https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1',
    link: '/open',
  },
  {
    title: 'R&B',
    bgColor: 'rgb(220, 20, 140)',
    imgSrc: 'https://i.scdn.co/image/ab67fb8200005cafbe6a6e705e1a71117c2d0c2c',
    link: '/open',
  },
  {
    title: '차트',
    bgColor: 'rgb(141, 103, 171)',
    imgSrc:
      'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
    link: '/open',
  },
  {
    title: 'RADAR',
    bgColor: 'rgb(119, 119, 119)',
    imgSrc: 'https://i.scdn.co/image/ab67fb8200005cafdb2aa9c7caea42f900721497',
    link: '/open',
  },
  {
    title: 'Fresh Finds',
    bgColor: 'rgb(255, 0, 144)',
    imgSrc: 'https://i.scdn.co/image/ab67fb8200005cafcc1499bbb8565f490858c2bc',
    link: '/open',
  },
  {
    title: 'EQUAL',
    bgColor: 'rgb(5, 105, 82)',
    imgSrc: 'https://i.scdn.co/image/ab67fb8200005caf9ed6e364e8839210dc4dbff7',
    link: '/open',
  },
];

const MainView = styled.div`
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  grid-area: main-view;
  min-height: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
`;
const SearchDiv = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-gap: 24px;
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 12px;
  }
  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 18px;
  }
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 24px;
  }
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 24px;
  }
`;

const A = styled.a`
  position: relative;
  border: none;
  border-radius: 8px;
  aspect-ratio: 1/1;
  overflow: hidden;
`;
const ItemDiv = styled.div`
  box-sizing: border-box;
`;
const ItemImg = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  transform: rotate(25deg) translate(18%, -2%);
  object-fit: cover;
  object-position: center center;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
`;
const ItemSpan = styled.span`
  position: absolute;
  color: white;
  font-size: 24px;
  font-weight: 700;
  box-sizing: border-box;
  overflow-wrap: break-word;
  word-break: keep-all;
  padding: 16px;
  line-height: 1.6;
`;
const WebPlayerSearch = () => {
  const MainRef = useRef<HTMLDivElement>(null);
  console.log(MainRef.current?.offsetWidth || 0);
  return (
    <MainView>
      <H2>모두 둘러보기</H2>
      <SearchDiv ref={MainRef}>
        {SearchData.map((data, index) => (
          <A key={index} style={{ backgroundColor: data.bgColor }}>
            <ItemDiv>
              <ItemSpan>{data.title}</ItemSpan>
              <ItemImg src={data.imgSrc} />
            </ItemDiv>
          </A>
        ))}
      </SearchDiv>
    </MainView>
  );
};

export default WebPlayerSearch;
