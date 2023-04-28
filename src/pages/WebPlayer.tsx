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
  background: #181818;
  grid-template-columns: auto 1fr;
  grid-template-rows: 10% 80% 10%;
  height: 100vh;
  position: relative;
  width: 100%;
  overflow: hidden; // 스크롤바 삭제.
`;

const WebPlayer = () => {
  return (
    <Layout>
      <NavBar />
      <WebPlayerTopBar />
      <Outlet />
      <NowPlayingBar />
    </Layout>
  );
};

export default WebPlayer;
