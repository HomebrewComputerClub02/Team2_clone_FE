import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Track } from '../../stores/SampleData';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRecoilState } from 'recoil';
import { GlobalPlay, GlobalTracksIndex } from '../../stores/atom';

export const ItemDiv = styled.div.attrs({ tabIndex: -1 })`
  display: grid;
  grid-template-columns:
    [index] 16px [title] 6fr [album] 4fr
    [date] 3fr [time] minmax(120px, 1fr);
  @media screen and (max-width: 970px) {
    grid-template-columns:
      [index] 16px [title] 6fr [album] 4fr
      [time] minmax(120px, 1fr);
  }
  @media screen and (max-width: 770px) {
    grid-template-columns:
      [index] 16px [title] 6fr
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
export const ItemSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
export const TitleDiv = styled.div`
  display: flex;
  gap: 16px;
`;
export const Img = styled.img`
  width: 40px;
  height: 40px;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BottomLink = styled(Link)<{
  color?: string;
  fw?: string;
  fs?: string;
}>`
  color: ${(props) => props.color || '#b3b3b3'};
  font-weight: ${(props) => props.fw || '400'};
  font-size: ${(props) => props.fs || '16px'};
  :hover {
    text-decoration: underline;
  }
`;
export const LikeDiv = styled.div`
  display: flex;
  gap: 30px;
`;
export const IndexDiv = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Index = styled.span`
  font-size: 16px;
  position: absolute;
  opacity: 1;
`;
export const PlayButton = styled.button`
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
interface SongProps {
  index: number;
  data: Track;
  onclick: any;
}
function Song({ index, data, onclick }: SongProps) {
  const [trackIndex, setTrackIndex] = useRecoilState(GlobalTracksIndex);
  const [globalPlay, setGlobalPlay] = useRecoilState(GlobalPlay);
  const [isLiked, setIsLiked] = useState<boolean>();
  //좋아요를 이미 누른 노래면
  useEffect(() => {
    //좋아요 조회 api
    setIsLiked(true);
  }, []);
  const toggleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      //좋아요 api보냄
    } else {
      setIsLiked(false);
    }
  };
  const onGlobalPlay = () => {
    setTrackIndex(index);
    setGlobalPlay((prev) => !prev);
    onclick();
  };
  return (
    <ItemDiv key={index} onClick={onGlobalPlay}>
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
        <Img src={data.imgSrc} />
        <TextDiv>
          <BottomLink color="white" to={'/open/track/asdf'}>
            {data.music}
          </BottomLink>
          <BottomLink className="hover" fs="14px" to={'/open/track/qwer'}>
            {data.artist}
          </BottomLink>
        </TextDiv>
      </TitleDiv>
      <BottomLink className="hover" to={data.albumLink}>
        {data.album}
      </BottomLink>
      <ItemSpan>{data.update}</ItemSpan>
      <LikeDiv style={{ justifySelf: 'end' }}>
        <div onClick={toggleLike}>
          {!isLiked ? (
            <FavoriteBorderIcon
              style={{
                cursor: 'pointer',
                color: '#eeeeee',
                fontSize: '20px',
              }}
            />
          ) : (
            <FavoriteIcon
              style={{
                cursor: 'pointer',
                color: '#1CD760',
                fontSize: '20px',
              }}
            />
          )}
        </div>
        <ItemSpan>{data.time}</ItemSpan>
      </LikeDiv>
    </ItemDiv>
  );
}

export default Song;
