import React from 'react';
import styled from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

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
  return (
    <MidDiv bg={mainColor}>
      <ButtonDiv>
        <PlayButton>
          <PlayCircleIcon
            sx={{
              color: '#12d760',
              fontSize: '68px',
            }}
          />
        </PlayButton>
      </ButtonDiv>
    </MidDiv>
  );
};

export default PlaylistMidDiv;
