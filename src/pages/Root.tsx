import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from '../GlobalStyles';
import { RecoilRoot, useRecoilState } from 'recoil';
import { useMediaQuery } from 'react-responsive';
import { screenSize } from '../stores/atom';
function Root() {
  const isDeskTopOrTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [result, setResult] = useRecoilState(screenSize);
  console.log('result', result);
  useEffect(() => {
    if (isDeskTopOrTablet) {
      setResult('desktop');
    } else if (isMobile) {
      setResult('tablet');
    }
  });
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default Root;
