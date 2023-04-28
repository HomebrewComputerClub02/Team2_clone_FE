import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from '../GlobalStyles';
function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default Root;
