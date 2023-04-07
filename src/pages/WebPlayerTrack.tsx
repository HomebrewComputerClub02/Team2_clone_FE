import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { MainView } from './WebPlayerCollection';

const WebPlayerTrack = () => {
  return (
    <MainView>
      <Outlet />
    </MainView>
  );
};

export default WebPlayerTrack;
