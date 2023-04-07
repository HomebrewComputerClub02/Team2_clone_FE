import React, { useState } from 'react';
import styled from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { LayerDiv } from '../atoms/AlbumBox';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';

interface Props {
  mainColor?: string;
}

const MidDiv = styled.div<{ bg?: string }>`
  background-color: ${(props) => props.bg || 'rgb(80, 56, 160)'};
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%);
  height: 120px;
  padding: 24px 32px;
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

const PlaylistMidDiv = ({ mainColor }: Props) => {
  const [isplaying, setIsplaying] = useState(false);
  const onTogglePlay = () => {
    setIsplaying((prev) => !prev);
  };
  return (
    <MidDiv bg={mainColor}>
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
    </MidDiv>
  );
};

export default PlaylistMidDiv;
