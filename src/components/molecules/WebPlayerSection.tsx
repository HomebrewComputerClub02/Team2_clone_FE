import React from 'react';
import styled from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

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

interface Props {
  data: Data;
  dataNum: number;
}
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

const WebPlayerSection = ({ data, dataNum }: Props) => {
  return (
    <Section>
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
          .filter((item: Item, idx: number) => {
            if (idx < dataNum) return item;
          })
          .map((item: Item, idx: number) => (
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
  );
};

export default WebPlayerSection;
