import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const GridData = [
  {
    title: '인기가요 & 신곡',
    body: [
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f000000024ab18459b1f5a2cd93e4f30d',
        title: '인기가요 Hot Now',
        titleLink: '/album',
        artist: '지금 국내에서 가장 핫한 노래들을 만나보세요! (커버: STAYC)',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f00000002eacc0304574188d548dac45d',
        title: 'Hot Hits Korea',
        titleLink: '/album',
        artist: '국내외 가장 핫한 노래들을 만나보세요! (커버: NewJeans)',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f000000028b2ac825c72d3f35415f4a36',
        title: 'New Music K-Pop',
        titleLink: '/album',
        artist:
          '신곡 배달! The freshest K-Pop releases are here! (Cover: SUNMI & BEO) (신선한 국내 최신곡들을 플레이리스트로 만나보세요.)',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f000000024ed913b8f81b5e33f28637fc',
        title: 'New Music Friday Korea',
        titleLink: '/album',
        artist:
          '매주 업데이트 되는 국내외 신곡들을 만나보세요. (커버: Sabrina Carpenter)',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f0000000240f680ff52fde89d5d69a611',
        title: '바이럴 히트 코리아',
        titleLink: '/album',
        artist:
          '국내 인터넷, SNS, 스포티파이에서 유행하고 있는 노래들을 만나보세요! (커버: imase)',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f000000023c6109e85e58100cf3215ffd',
        title: '국내 가요 Rising',
        titleLink: '/album',
        artist: '화제가 되고 있는 국내 곡들을 만나보세요! (커버: 니콜)',
        artistLink: '/artist',
      },
    ],
  },
  {
    title: '국내 분위기 & 상황별',
    body: [
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f000000025d96c142647d9469390091d0',
        title: 'WOR K  OUT',
        titleLink: '/album',
        artist:
          'Workout to K-Pop? Count me in! (Cover: CAMO(카모)) (신나는 케이팝 댄스 음악과 함께 운동을 즐겨보세요!)',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f0000000262a9874085e91a05440a1cee',
        title: 'Dalkom Cafe',
        titleLink: '/album',
        artist:
          "Chill Korean tunes that's perfect with your latte or americano. (카페와 어울리는 편안한 음악들을 감상하세요.)",
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f000000026937248c9ef8c9f96dd2a110',
        title: 'd r e a m l i k e ㄲ ㅜ ㅁ',
        titleLink: '/album',
        artist:
          'Enjoy mysterious and dreamy music as if walking in a dream. (꿈 속을 거닐듯 신비롭고 몽환적인 음악들을 즐겨보세요.)',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f000000026c0a95b092a0a2aef14ba4a2',
        title: 'K-Pop Acoustic',
        titleLink: '/album',
        artist:
          'Chillout to the coolest Korean acoustic tunes. (Cover: J.YUNA(제이유나)) (감미롭고 부드러운 한국 어쿠스틱 음악과 함께하세요.)',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f00000002b1670ed57eb296260b0dccd5',
        title: '4:00 AM GROOVE',
        titleLink: '/album',
        artist: '새벽 감성. Issa Vibe.',
        artistLink: '/artist',
      },
      {
        imgSrc:
          'https://i.scdn.co/image/ab67706f00000002b2376c0ecee1d21c1ed19acb',
        title: '포근 편안 폭신',
        titleLink: '/album',
        artist:
          '이불 안 속처럼 포근하고 편안한 음악들과 함께 폭신한 기분을 만끽하세요.',
        artistLink: '/artist',
      },
    ],
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

const H1 = styled.h1`
  color: #fff;
  font-size: 96px;
  font-weight: 900;
  margin-top: 10px;
  margin-bottom: 60px;
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
  background-color: #181818;
  padding: 16px;
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #282828;
    > div > div {
      opacity: 1;
      bottom: 8px;
      transition: all 0.3s ease;
    }
  }
`;
const ImgDiv = styled.div`
  margin-bottom: 16px;
  position: relative;
`;
const ButtonDiv = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  z-index: 3;
  right: 8px;
  bottom: 0px;
  opacity: 0;
  transition: all 0.3s ease;
  &:hover {
    > button {
      transform: scale(1.1);
      transition: all 0.3s ease;
    }
  }
`;

const PlayButton = styled.button`
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  position: relative;
  padding: 0px;
  cursor: pointer;
`;
const BlackDiv = styled.div`
  width: 0;
  height: 0;
  border-bottom: 9.6px solid transparent;
  border-top: 9.6px solid transparent;
  border-left: 15.3px solid black;
  border-right: 15.3px solid transparent;
  position: absolute;
  top: 50%;
  left: 69.6%;
  transform: translate(-50%, -50%);
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
  line-height: 1.2;
  height: 35px;
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
  &:hover {
    text-decoration: underline;
  }
`;

const WebPlayerGenre = () => {
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
      <H1>가요</H1>
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
          <GridDiv>
            {data.body
              .filter((item, idx) => {
                if (idx < calcWidth()) return item;
              })
              .map((item, idx) => (
                <ItemDiv key={idx}>
                  <ImgDiv>
                    <Img src={item.imgSrc} />
                    <ButtonDiv>
                      <PlayButton>
                        <PlayCircleIcon
                          sx={{
                            color: '#12d760',
                            fontSize: '48px',
                          }}
                        />
                        <BlackDiv />
                      </PlayButton>
                    </ButtonDiv>
                  </ImgDiv>
                  <TextDiv>
                    <NameP>{item.title}</NameP>
                    <SubNameA href="open/artist">{item.artist}</SubNameA>
                  </TextDiv>
                </ItemDiv>
              ))}
          </GridDiv>
        </Section>
      ))}
    </MainView>
  );
};

export default WebPlayerGenre;
