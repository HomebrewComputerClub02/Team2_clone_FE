import React from 'react';
import styled from 'styled-components';

const MainView = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  grid-area: main-view;
  min-height: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const WebPlayerHome = () => {
  return <MainView></MainView>;
};

export default WebPlayerHome;
