import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import Section from '../components/molecules/Section';
import MainViewFooter from '../components/molecules/MainViewFooter';
import WebPlayerTopBar from '../components/molecules/WebPlayerTopBar';
import { homeListApi } from '../remote.tsx/home';
import HomeSection from '../components/molecules/HomeSection';

interface Data {
  type: string;
  data: Array<Item>;
}
interface Item {
  name: string;
  id: string;
}

const MainView = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  grid-area: main-view;
  min-height: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  min-width: 520px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
  box-sizing: border-box; // box크기에 padding영역과 border영역을 포함해준다.
  gap: 24px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px;
    background: rgba(233, 7, 53, 0.4); // 차이 두기 위해 색깔 추가
  }
  &::-webkit-scrollbar-thumb {
    height: 10%; // 알아서 자동 설정이라 사실 무의미.
    background: #217af4;
  }
`;

const WebPlayerHome = () => {
  // 화면 크기에 따라 렌더링하는 item수 설정.
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [dataNum, setDataNum] = useState(0);
  const calcWidth = (): void => {
    if (windowSize.width <= 770) setDataNum(2);
    else if (windowSize.width <= 970) setDataNum(3);
    else if (windowSize.width <= 1300) setDataNum(4);
    else if (windowSize.width <= 1500) setDataNum(5);
    else setDataNum(6);
  };
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    calcWidth();
  };

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    calcWidth(); //처음에 보여줘야 할 아이템 개수 확인.
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    homeListApi().then((res) => {
      setHomeData(res.data);
    });
  }, []);

  return (
    <>
      <WebPlayerTopBar />
      <MainView>
        {Object.values(homeData)
          .filter((val, index) => {
            if (index != 0) return val;
          })
          .map((val: Data, index: number) => (
            <HomeSection
              data={val}
              dataNum={dataNum}
              show={true}
              color={'white'}
              key={index}
            />
          ))}
        <MainViewFooter />
      </MainView>
    </>
  );
};

export default WebPlayerHome;
