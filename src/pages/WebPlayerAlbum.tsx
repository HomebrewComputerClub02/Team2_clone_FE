import React from 'react';
import styled from 'styled-components';

const MainView = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  grid-area: main-view;
  min-height: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box; // box크기에 padding영역과 border영역을 포함해준다.
`;

const WebPlayerAlbum = () => {
  return <MainView>hi</MainView>;
};

export default WebPlayerAlbum;
