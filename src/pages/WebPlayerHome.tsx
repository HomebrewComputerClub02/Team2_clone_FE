import { debounce } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const MainView = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  grid-area: main-view;
  min-height: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
const TitleDiv = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
const HDiv = styled.div`
  line-height: normal;
  flex-grow: 1;
`;
const H2 = styled.h2`
  font-size: 24px;
  color: white;
  font-weight: 700;
`;
const TitleA = styled.a``;
const ShowAllA = styled.a`
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 700;
`;
const GridDiv = styled.div`
  grid-auto-rows: 0; //새로 생기는 행의 높이를 0으로 설정.
  grid-template-rows: 1fr;
  overflow: hidden;
  min-width: 185px;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-gap: 24px;
  // media query는 겹치는 영역에 한하여 아래에 있는 코드 적용.
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 24px;
  }
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 24px;
  }
  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 18px;
  }
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 12px;
  }
`;
const ItemDiv = styled.div`
  background-color: black;
  padding: 16px;
  position: relative;
`;
const ImgDiv = styled.div`
  margin-bottom: 16px;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 62px;
`;
const NameP = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 700;
  overflow: hidden; // 넘쳐난 텍스트 숨기기
  text-overflow: ellipsis; //... 말줄임 효과.
  white-space: nowrap; // 줄바꿈 없애기.
  margin-block-start: 4px;
  margin-block-end: 4px;
  padding-block-end: 4px;
`;
const SubNameA = styled.a`
  height: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  color: #b3b3b3;
  overflow: hidden; // 넘쳐난 텍스트 숨기기
  text-overflow: ellipsis; //... 말줄임 효과.
  word-break: break-all; // 영어는 필요.
  padding-block-start: 4px;
  text-decoration: none;
`;

const WebPlayerHome = () => {
  // 화면 크기에 따라 렌더링하는 item수 설정.
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const calcWidth = () => {
    if (windowSize.width <= 770) return 2;
    else if (windowSize.width <= 970) return 3;
    else if (windowSize.width <= 1300) return 4;
    else if (windowSize.width <= 1500) return 5;
    else return 6;
  };
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MainView>
      {GridData.map((data, index) => (
        <Section key={index}>
          <TitleDiv>
            <HDiv>
              <H2>
                <TitleA>{data.title}</TitleA>
              </H2>
            </HDiv>
            <ShowAllA>모두 표시</ShowAllA>
          </TitleDiv>
          <p>{calcWidth()}</p>
          <GridDiv>
            {data.body
              .filter((item, idx) => {
                if (idx < calcWidth()) return item;
              })
              .map((item, idx) => (
                <ItemDiv key={idx}>
                  <ImgDiv>
                    <Img src={item.imgSrc} />
                  </ImgDiv>
                  <TextDiv>
                    <NameP>{item.title}</NameP>
                    <SubNameA href="artist">{item.artist}</SubNameA>
                  </TextDiv>
                </ItemDiv>
              ))}
          </GridDiv>
        </Section>
      ))}
    </MainView>
  );
};

export default WebPlayerHome;
