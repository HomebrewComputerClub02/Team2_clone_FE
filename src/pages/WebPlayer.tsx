import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/molecules/NavBar';
import TopBar from '../components/molecules/TopBar';
import NowPlayingBar from '../components/molecules/NowPlayingBar';
import { Outlet } from 'react-router-dom';

const P = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Noto Sans SC', sans-serif;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'nav-bar top-bar'
    'nav-bar main-view'
    'now-playing-bar now-playing-bar';
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 64px 593px 64px;
  height: 100%;
  min-height: 100%;
  position: relative;
  width: 100%;
`;

const WebPlayer = () => {
  return (
    <div>
      <Layout>
        <TopBar />
        <NavBar />
        <Outlet />
        <NowPlayingBar />
      </Layout>
    </div>
  );
};

export default WebPlayer;
