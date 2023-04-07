import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface Data {
  imgSrc: string;
  music: string;
  play: number;
  time: number;
  musicLink: string;
}

interface Props {
  data: Array<Data>;
}

const BottomDiv = styled.div`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0 32px;
`;

const PopularSection = styled.section`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;
const ItemDiv = styled.div.attrs({ tabIndex: -1 })`
  display: grid;
  grid-template-columns:
    [index] 16px [title] 4fr [play] 2fr
    [time] minmax(120px, 1fr);
  @media screen and (max-width: 970px) {
    grid-template-columns:
      [index] 16px [title] 4fr [play] 2fr
      [time] minmax(120px, 1fr);
  }
  @media screen and (max-width: 770px) {
    grid-template-columns:
      [index] 16px [title] 4fr
      [time] minmax(120px, 1fr);
  }
  border: 1px solid transparent;
  border-radius: 4px;
  height: 56px;
  grid-gap: 16px;
  padding: 0 16px;
  align-items: center;
  color: #b3b3b3;
  :hover {
    background-color: hsla(0, 0%, 100%, 0.1);
    .hover {
      color: white;
    }
    .play {
      opacity: 1;
    }
    .index {
      opacity: 0;
    }
  }
  :focus {
    background-color: hsla(0, 0%, 100%, 0.3);
    .hover {
      color: white;
    }
    .play {
      opacity: 1;
    }
    .index {
      opacity: 0;
    }
  }
`;
const ItemSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
const TitleDiv = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
`;
const BottomLink = styled(Link)<{ color?: string; fw?: string; fs?: string }>`
  color: ${(props) => props.color || '#b3b3b3'};
  font-weight: ${(props) => props.fw || '400'};
  font-size: ${(props) => props.fs || '16px'};
  :hover {
    text-decoration: underline;
  }
`;
const LikeDiv = styled.div`
  display: flex;
  gap: 30px;
`;
const IndexDiv = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Index = styled.span`
  font-size: 16px;
  position: absolute;
  opacity: 1;
`;
const PlayButton = styled.button`
  position: absolute;
  right: 4px;
  opacity: 0;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  color: white;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 1;
  }
`;
const PlayDiv = styled.div``;
const ArtistBottomDiv = ({ data }: Props) => {
  return (
    <BottomDiv>
      <PopularSection>
        <h2 style={{ marginBlockEnd: '20px' }}>인기</h2>
        {data.map((value, index) => (
          <ItemDiv key={index}>
            <IndexDiv>
              <Index className="index">{index + 1}</Index>
              <PlayButton className="play">
                <PlayArrowIcon
                  sx={{
                    fontSize: '20px',
                  }}
                />
              </PlayButton>
            </IndexDiv>
            <TitleDiv>
              <Img src={value.imgSrc} />
              <BottomLink color="white" to={value.musicLink}>
                {value.music}
              </BottomLink>
            </TitleDiv>
            <PlayDiv className="hover">
              {Number(value.play).toLocaleString('en')}
            </PlayDiv>
            <LikeDiv style={{ justifySelf: 'end' }}>
              <FavoriteIcon
                sx={{
                  color: '#1ed760',
                  fontSize: '20px',
                }}
              />
              <ItemSpan>
                {value.time % 60 >= 10
                  ? Math.floor(value.time / 60) + ':' + (value.time % 60)
                  : Math.floor(value.time / 60) + ':0' + (value.time % 60)}
              </ItemSpan>
            </LikeDiv>
          </ItemDiv>
        ))}
      </PopularSection>
    </BottomDiv>
  );
};

export default ArtistBottomDiv;
