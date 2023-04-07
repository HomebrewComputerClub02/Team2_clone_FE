import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineFilterFrames } from 'react-icons/md';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
export interface MusicProfileProps {
  ImgSrc: string;
  artist: string;
  song: string;
}

export const ItemDiv = styled.div`
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
export const ImgDiv = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  position: relative;
`;
export const ButtonDiv = styled.div`
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

export const PlayButton = styled.button`
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  position: relative;
  padding: 0px;
  cursor: pointer;
`;
export const BlackDiv = styled.div`
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
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
function MusicProfile({ ImgSrc, artist, song }: MusicProfileProps) {
  const [isLiked, setIsLiked] = useState<boolean>();
  const [isPhotoExpand, setPhotoExpand] = useState(false);
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
  const togglePhoto = () => {
    setPhotoExpand((prev) => !prev);
  };
  console.log('isPhotoExpand', isPhotoExpand);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '33.3vw',
        position: 'relative',
      }}
    >
      <ItemDiv>
        <ImgDiv>
          <Img src={ImgSrc} />
          <ButtonDiv>
            <PlayButton>
              <KeyboardArrowUpIcon
                sx={{
                  fontSize: '48px',
                }}
                onClick={togglePhoto}
              />
            </PlayButton>
          </ButtonDiv>
        </ImgDiv>
      </ItemDiv>
      {isPhotoExpand && (
        <Img
          src={ImgSrc}
          style={{
            width: '200px',
            height: '200px',
            position: 'absolute',
            top: '-200px',
            left: '10px',
            zIndex: '200',
          }}
        ></Img>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          margin: '20px',
          alignItems: 'start',
          width: '100px',
          height: '50%',
        }}
      >
        <Link to="album/asdfasdfasdfasdf">
          <p style={{ color: '#eeeeee', fontSize: '14px' }}>{song}</p>
        </Link>
        <Link to="artist/asdfasdfasdfasdf">
          <p style={{ color: '#eeeeee', fontSize: '12px' }}>{artist}</p>
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          width: '60px',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '30px',
        }}
      >
        <div onClick={toggleLike}>
          {!isLiked ? (
            <FavoriteBorderIcon
              style={{ cursor: 'pointer', color: '#eeeeee', fontSize: '20px' }}
            />
          ) : (
            <FavoriteIcon
              style={{ cursor: 'pointer', color: '#1CD760', fontSize: '20px' }}
            />
          )}
        </div>
        <MdOutlineFilterFrames
          color="#EEEEEE"
          size={'20px'}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default MusicProfile;
