import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Noto Sans SC', sans-serif;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'top-bar top-bar'
    'nav-bar main-view'
    'now-playing-bar now-playing-bar';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  min-height: 100%;
  position: relative;
  width: 100%;
`;
const TopBar = styled.div`
  grid-area: 'main-view';
  height: 64px;
  min-width: 0;
`;
const NavBar = styled.div`
  background-color: #000;
  display: flex;
  grid-area: 'nav-bar';
  min-height: 0;
  position: relative;
  width: 200px;
  z-index: 4;
`;
const MainView = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  grid-area: 'main-view';
  min-height: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
const NowPlayingBar = styled.div`
  grid-area: 'now-playing-bar';
  width: 100%;
`;
const WebPlayerHome = () => {
  return (
    <div>
      <Layout>
        <TopBar></TopBar>
        <NavBar></NavBar>
        <MainView></MainView>
        <NowPlayingBar></NowPlayingBar>
      </Layout>
    </div>
  );
};

export default WebPlayerHome;
