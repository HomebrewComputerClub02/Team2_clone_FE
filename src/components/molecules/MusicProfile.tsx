import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineFilterFrames } from 'react-icons/md';
export interface MusicProfileProps {
  ImgSrc: string;
  artist: string;
  song: string;
}
const Img = styled.img`
  display: block;
  height: 60px;
  width: 60px;
`;

function MusicProfile({ ImgSrc, artist, song }: MusicProfileProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '33.3vw',
      }}
    >
      <Img src={ImgSrc}></Img>
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
        <Link to="/">
          <p style={{ color: '#eeeeee', fontSize: '14px' }}>{song}</p>
        </Link>
        <Link to="/">
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
        <AiOutlineHeart
          color="#EEEEEE"
          size={'20px'}
          style={{ cursor: 'pointer' }}
        />
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
