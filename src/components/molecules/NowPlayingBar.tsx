import React, { useState } from 'react';
import styled from 'styled-components';
import { MusicProfilePropsSample } from '../../stores/SampleData';
import MusicController from './MusicController';

const NowPlayingDiv = styled.div`
  grid-area: now-playing-bar;
  background-color: black;
  height: 12vh;
  display: flex;
`;

const NowPlayingBar = () => {
  return (
    <NowPlayingDiv>
      <MusicController {...MusicProfilePropsSample} />
    </NowPlayingDiv>
  );
};

export default NowPlayingBar;
