import React from 'react';
import styled from 'styled-components';

const TopDiv = styled.div`
  grid-area: top-bar;
  min-width: 0;
  background-color: blue;
  height: 64px;
`;

const TopBar = () => {
  return <TopDiv>TopDiv</TopDiv>;
};

export default TopBar;
