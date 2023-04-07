import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import { TopDivData, Tracks } from '../stores/SampleData';
import LikeTopDiv from '../components/molecules/LikeTopDiv';

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
      <LikeTopDiv data={TopDivData} num={Tracks.length} />
      <PlaylistMidDiv />
      <PlaylistBottomDiv data={Tracks} />
    </Section>
  );
};

export default WebPlayerTracks;
