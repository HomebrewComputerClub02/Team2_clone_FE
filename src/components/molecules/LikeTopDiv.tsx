import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Data {
  imgSrc: string;
  playlistName: string;
}

interface Props {
  data: Data;
  num: number;
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
const VioletDiv = styled.div`
  background-color: rgb(80, 56, 160);
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
  :last-child::before {
    content: '•';
    margin: 0 4px;
  }
`;
const SecondText = styled.span`
  font-size: 96px;
  font-weight: 900;
  margin-block-end: 20px;
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

const LikeTopDiv = ({ data, num }: Props) => {
  return (
    <TopDiv>
      <VioletDiv></VioletDiv>
      <GradDiv></GradDiv>
      <ImgDiv>
        <Img src={data.imgSrc} />
      </ImgDiv>
      <TextDiv>
        <FirstText>플레이리스트</FirstText>
        <SecondText>{data.playlistName}</SecondText>
        <TextBottomDiv>
          <UserLink to="/open/collection/artists">배지호</UserLink>
          <FirstText>{num}곡</FirstText>
        </TextBottomDiv>
      </TextDiv>
    </TopDiv>
  );
};

export default LikeTopDiv;
