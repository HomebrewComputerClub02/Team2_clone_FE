import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { LayerDiv } from '../atoms/AlbumBox';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Track } from '../../stores/SampleData';
import { useRecoilState } from 'recoil';
import { GlobalTracks } from '../../stores/atom';
const MidDiv = styled.div`
  background-color: rgb(80, 56, 160);
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%);
  height: 120px;
  padding: 24px 32px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const ButtonDiv = styled.div`
  width: 68px;
  height: 68px;
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

interface PlayListMidDivProps {
  data: Track[];
  type: string;
}

const PlaylistMidDiv = ({ type, data }: PlayListMidDivProps) => {
  const [globalTracks, setGlobalTracks] = useRecoilState(GlobalTracks);
  const [isplaying, setIsplaying] = useState(false);
  const [isLiked, setIsLiked] = useState<boolean>();
  const onTogglePlay = () => {
    setIsplaying((prev) => !prev);
    setGlobalTracks(data);
  };
  //좋아요를 이미 누른 playlist이면
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
  return (
    <MidDiv>
      <ButtonDiv>
        <PlayButton onClick={onTogglePlay}>
          {!isplaying ? (
            <LayerDiv>
              <AiFillPauseCircle
                size={'70px'}
                color={'1CD760'}
                style={{
                  zIndex: '10',
                  position: 'absolute',
                  top: '-7px',
                  left: '-7px',
                }}
              />
            </LayerDiv>
          ) : (
            <LayerDiv>
              <AiFillPlayCircle
                size={'70px'}
                color={'1CD760'}
                style={{
                  zIndex: '10',
                  position: 'absolute',
                  top: '-7px',
                  left: '-7px',
                }}
              />
            </LayerDiv>
          )}
        </PlayButton>
      </ButtonDiv>
      <div style={{ alignSelf: 'end' }}>
        {type === 'album' ? (
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
        ) : type === 'artist' ? (
          <h1>follow</h1>
        ) : null}
      </div>
    </MidDiv>
  );
};

export default PlaylistMidDiv;
