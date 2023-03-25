import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  grid-area: top-bar;
  min-width: 0;
  background-color: blue;
  height: 64px;
`;

function WebPlayerTopBar() {
  return <Div>TopDiv</Div>;
}

export default WebPlayerTopBar;
