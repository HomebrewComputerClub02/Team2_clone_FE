import React from 'react';
import styled from 'styled-components';

const MainView = styled.div`
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  grid-area: main-view;
  min-height: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const WebPlayerSearch = () => {
  return <MainView></MainView>;
};

export default WebPlayerSearch;
