import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/molecules/NavBar';
import NowPlayingBar from '../components/molecules/NowPlayingBar';
import { Outlet } from 'react-router-dom';
import WebPlayerTopBar from '../components/molecules/WebPlayerTopBar';

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
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 593px auto;
  height: 100%;
  min-height: 100%;
  position: relative;
  width: 100%;
  overflow: hidden; // 스크롤바 삭제.
`;

const WebPlayer = () => {
  return (
    <Layout>
      <NavBar />
      <Outlet />
      <NowPlayingBar />
    </Layout>
  );
};

export default WebPlayer;
