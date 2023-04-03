import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { MainView } from './WebPlayerCollection';

const WebPlayerAlbum = () => {
  return (
    <MainView>
      <Outlet />
    </MainView>
  );
};

export default WebPlayerAlbum;
