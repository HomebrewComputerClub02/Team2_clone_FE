import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TbMusic } from 'react-icons/tb';
interface Data {
  imgSrc: string;
  playlistName: string;
  mainColor: string;
}
interface PlaylistData {
  imgSrc: string;
  music: string;
  artist: string;
  album: string;
  update: string;
  time: number;
  musicLink: string;
  artistLink: string;
  albumLink: string;
}
interface Props {
  data: Data;
  playlistData: Array<PlaylistData>;
}

const TopDiv = styled.div`
  height: 30vh;
  max-height: 500px;
  min-height: 340px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 32px;
  position: relative;
  display: flex;
`;
const MainColorDiv = styled.div<{ bg?: string }>`
  background-color: ${(props) => props.bg};
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
`;
const GradDiv = styled.div`
  background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
`;
const ImgDiv = styled.div`
  width: 232px;
  height: 232px;
  min-width: 232px;
  align-self: flex-end;
  margin-inline-end: 24px;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;
const TextDiv = styled.div`
  display: flex;
  flex-flow: column;
  color: white;
  position: relative;
  justify-content: flex-end;
  gap: 30px;
`;
const FirstText = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
const SecondText = styled.span`
  font-size: 96px;
  font-weight: 900;
  margin-block-end: 20px;
`;

const ThirdText = styled.span`
  font-size: 14px;
  font-weight: 700;
  ::before {
    content: '•';
    margin: 0 4px;
  }
  ::after {
    content: ', ';
    margin-right: 4px;
  }
`;
const TimeText = styled.span`
  color: hsla(0, 0%, 100%, 0.7);
`;
const TextBottomDiv = styled.div`
  display: flex;
`;
const UserLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const EmptyImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaylistTopDiv = ({ data, playlistData }: Props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(
      playlistData.reduce((acc, cur) => {
        return acc + cur.time;
      }, 0),
    );
  }, []);

  return (
    <TopDiv>
      <MainColorDiv bg={data.mainColor}></MainColorDiv>
      <GradDiv></GradDiv>
      <ImgDiv>
        {playlistData.length >= 4 ? (
          <ImgGrid>
            <Img src={playlistData[0].imgSrc} />
            <Img src={playlistData[1].imgSrc} />
            <Img src={playlistData[2].imgSrc} />
            <Img src={playlistData[3].imgSrc} />
          </ImgGrid>
        ) : playlistData.length == 0 ? (
          <EmptyImg>
            <TbMusic size={64} color="#b3b3b3" />
          </EmptyImg>
        ) : (
          <Img src={playlistData[0].imgSrc} />
        )}
      </ImgDiv>
      <TextDiv>
        <FirstText>플레이리스트</FirstText>
        <SecondText>{data.playlistName}</SecondText>
        <TextBottomDiv>
          <UserLink to="/open/collection/artists">배지호</UserLink>
          <ThirdText>{playlistData.length}곡</ThirdText>
          <TimeText>
            {time >= 3600
              ? Math.floor(time / 3600) +
                '시간 ' +
                (Math.floor(time / 60) % 60) +
                '분 ' +
                (time % 60) +
                '초'
              : Math.floor(time / 60) + '분 ' + (time % 60) + '초'}
          </TimeText>
        </TextBottomDiv>
      </TextDiv>
    </TopDiv>
  );
};

export default PlaylistTopDiv;
