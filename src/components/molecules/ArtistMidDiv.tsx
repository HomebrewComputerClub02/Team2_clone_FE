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
  display: flex;
  gap: 30px;
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

const FollowButton = styled.button`
  border-radius: 4px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  background-color: transparent;
  color: white;
  font-size: 12px;
  font-weight: 700;
  height: 50%;
  padding: 7px 15px;
  &:hover {
    border-color: white;
  }
`;

const ArtistMidDiv = ({ mainColor }: Props) => {
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
      <FollowButton>팔로우하기</FollowButton>
    </MidDiv>
  );
};

export default ArtistMidDiv;
