import React from 'react';
import HomeFooter from '../components/molecules/HomeFooter';
import TopBar from '../components/molecules/TopBar';
import {
  BackgroundButton,
  BackgroundButtons,
  BackgroundP,
  BackgroundSmallP,
  BackgroundTitle,
  HomeBackgroundLoggedOut,
} from '../styled';
function Homebrewtify() {
  return (
    <>
      <TopBar />
      <HomeBackgroundLoggedOut>
        <BackgroundTitle>
          다⁠양⁠한 해⁠외 히⁠트⁠곡⁠과 국⁠내 인⁠기 음⁠악⁠을 들⁠어⁠보⁠세⁠요
        </BackgroundTitle>
        <BackgroundP>
          1개의 모바일 기기에서 7일 동안 무료로 Spotify Premium 멤버십을
          이용해보세요. 결제 세부 정보는 필요하지 않습니다.
        </BackgroundP>
        <BackgroundButtons>
          <BackgroundButton>
            <h1 style={{ fontSize: '0.7rem', display: 'block' }}>
              Apple Store에서
            </h1>
            <p style={{ fontSize: '0.4rem', display: 'block' }}>
              다운로드 하기
            </p>
          </BackgroundButton>
          <BackgroundButton>
            <h1 style={{ fontSize: '0.7em', display: 'block' }}>
              Apple Store에서
            </h1>
            <p style={{ fontSize: '0.4rem', display: 'block' }}>
              다운로드 하기
            </p>
          </BackgroundButton>
        </BackgroundButtons>
        <BackgroundSmallP>
          약관이 적용됩니다. Premium을 이미 이용해 보셨거나 다른 기기로
          이용하시려는 경우 이 프로모션을 이용할 수 없습니다. 7일 후에도 계속
          Spotify 서비스를 이용하려면 Premium을 구독해야 합니다.
        </BackgroundSmallP>
      </HomeBackgroundLoggedOut>
      <HomeFooter />
    </>
  );
}

export default Homebrewtify;
