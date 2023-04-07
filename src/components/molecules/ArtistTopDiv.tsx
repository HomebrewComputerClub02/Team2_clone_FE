import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Data {
  imgSrc: string;
  artistName: string;
  mainColor: string;
}

interface Props {
  data: Data;
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
  background-size: cover;
  ::before {
    content: '';
    background-image: var(--img);
    opacity: 0.7;
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-flow: column;
  color: white;
  position: relative;
  justify-content: flex-end;
  gap: 30px;
`;
const TopTextDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const CheckDiv = styled.div`
  position: relative;
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const TopText = styled.span`
  font-weight: 400;
  font-size: 14px;
`;
const ListenerText = styled.span`
  font-size: 16px;
`;
const SecondText = styled.span`
  font-size: 96px;
  font-weight: 900;
  margin-block-end: 20px;
`;
const TextBottomDiv = styled.div`
  display: flex;
`;

const ArtistTopDiv = ({ data }: Props) => {
  return (
    <TopDiv
      style={
        {
          '--img': `url(
            ${data.imgSrc})
          `,
        } as React.CSSProperties
      }
    >
      <TextDiv>
        <TopTextDiv>
          <CheckDiv>
            <CheckCircleIcon
              sx={{
                color: 'skyblue',
                borderRadius: '50%',
                zIndex: 3,
                position: 'relative',
                bottom: '2.25px',
                right: '2.25px',
              }}
            />
          </CheckDiv>
          <TopText>확인된 아티스트</TopText>
        </TopTextDiv>
        <SecondText>{data.artistName}</SecondText>
        <TextBottomDiv>
          <ListenerText>월별 리스너 7,545,482명</ListenerText>
        </TextBottomDiv>
      </TextDiv>
    </TopDiv>
  );
};

export default ArtistTopDiv;
