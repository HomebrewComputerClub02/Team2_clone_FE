import React, { useEffect } from 'react';
import TopBar from '../components/molecules/TopBar';
import styled from 'styled-components';
import { H1 } from '../styled';
import HomeFooter from '../components/molecules/HomeFooter';
import { useRecoilValue } from 'recoil';
import { screenSize } from '../stores/atom';
const LoggedInDiv = styled.div`
  background: url('images/Home.png') no-repeat center;
  height: 70vh;
  width: 100vw;
  background-size: 100vw 70vh;
`;

const LoggedOutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10vw;
  background: ${(props) => props.theme.background.pinkColor};
  height: 70vh;
  width: 100vw;
  background-size: 100vw 70vh;
`;

const P = styled.p`
  color: balck;
  font-size: 16px;
  font-weight: ${(props) => props.theme.font.light};
`;

const Button = styled.div`
  margin: 10px;
  padding-left: 25px;
  color: white;
  width: 200px;
  height: 70px;
  background: ${(props) => props.theme.background.blackColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.border.greyColor};
  border-radius: 10px;
  background-image: url('images/appleLogo.png');
  background-repeat: no-repeat;
  background-position: left -12px bottom -8px;
  background-size: 8vh 8vh;
  @media (max-width: 400px) {
    transform: scale(0.7);
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SmallP = styled.p`
  font-weight: ${(props) => props.theme.font.light};
  font-size: 12px;
  color: black;
`;

const Title = styled.h1`
  font-weight: ${(props) => props.theme.font.regular};
  font-size: 40px;
  color: black;
`;

const ButtonTitle = styled.h1`
  font-size: 18px;
`;

const ButtonP = styled.p`
  font-size: 12px;
`;

const Div = styled.div`
  margin: 0 auto;
`;

function Homebrewtify() {
  const screen = useRecoilValue(screenSize);
  return (
    <Div>
      <TopBar />
      <LoggedOutDiv>
        <Title>
          다⁠양⁠한 해⁠외 히⁠트⁠곡⁠과 국⁠내 인⁠기 음⁠악⁠을 들⁠어⁠보⁠세⁠요
        </Title>
        <P>
          1개의 모바일 기기에서 7일 동안 무료로 Spotify Premium 멤버십을
          이용해보세요. 결제 세부 정보는 필요하지 않습니다.
        </P>
        <Buttons>
          <Button>
            <ButtonTitle>Apple Store에서</ButtonTitle>
            <ButtonP>다운로드 하기</ButtonP>
          </Button>
          <Button>
            <ButtonTitle>Apple Store에서</ButtonTitle>
            <ButtonP>다운로드 하기</ButtonP>
          </Button>
        </Buttons>
        <SmallP>
          약관이 적용됩니다. Premium을 이미 이용해 보셨거나 다른 기기로
          이용하시려는 경우 이 프로모션을 이용할 수 없습니다. 7일 후에도 계속
          Spotify 서비스를 이용하려면 Premium을 구독해야 합니다.
        </SmallP>
      </LoggedOutDiv>
      <HomeFooter />
    </Div>
  );
}

export default Homebrewtify;

// import React from 'react'
// import { useMediaQuery } from 'react-responsive'
