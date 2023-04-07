import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlaylistTopDiv from '../components/molecules/PlaylistTopDiv';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import { TopDivData, Tracks } from '../stores/SampleData';
import { useRecoilState } from 'recoil';
import { GlobalTracks } from '../stores/atom';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: -24px;
  margin-left: -24px;
  margin-right: -24px;
`;

const WebPlayerTracks = () => {
  return (
    <Section>
      <PlaylistTopDiv data={TopDivData} num={Tracks.length} />
      <PlaylistMidDiv data={Tracks} type={'liked'} />
      <PlaylistBottomDiv data={Tracks} />
    </Section>
  );
};

export default WebPlayerTracks;
