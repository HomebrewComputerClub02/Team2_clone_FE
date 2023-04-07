import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Track } from '../../stores/SampleData';
import Song from './Song';

export const BottomDiv = styled.div`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0 32px;
`;
export const OutlineGrid = styled.div`
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
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  grid-gap: 16px;
  color: #b3b3b3;
  height: 36px;
  align-items: center;
  padding: 0 16px;
`;

export const OutlineSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const FlexDiv = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;
export interface props {
  data: Track[];
}

const PlaylistBottomDiv = ({ data }: props) => {
  return (
    <BottomDiv>
      <OutlineGrid>
        <OutlineSpan>#</OutlineSpan>
        <OutlineSpan>제목</OutlineSpan>
        <OutlineSpan>앨범</OutlineSpan>
        <OutlineSpan>추가한 날짜</OutlineSpan>
        <OutlineSpan style={{ justifySelf: 'end' }}>
          <AccessTimeIcon />
        </OutlineSpan>
      </OutlineGrid>
      <FlexDiv>
        {data.map((value, index) => (
          <Song data={value} index={index} key={index} />
        ))}
      </FlexDiv>
    </BottomDiv>
  );
};

export default PlaylistBottomDiv;
