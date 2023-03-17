import React from 'react';
import styled from 'styled-components';

const NowPlayingDiv = styled.div`
  grid-area: now-playing-bar;
  background-color: pink;
  height: 64px;
`;
const NowPlayingBar = () => {
  return <NowPlayingDiv>NowPlayingDiv</NowPlayingDiv>;
};

export default NowPlayingBar;
