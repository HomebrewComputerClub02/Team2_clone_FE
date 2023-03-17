import React from 'react';
import { IoBeerOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { screenSize } from '../../stores/atom';
import { Logo, LogoH1 } from '../../styled';
import { TiThMenu } from 'react-icons/ti';
const Div = styled.div`
  display: flex;
  background: ${(props) => props.theme.background.blackColor};
  height: 10vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;

const A = styled.h1`
  font-weight: ${(props) => props.theme.font.regular};
  color: white;
  &:hover {
    color: ${(props) => props.theme.text.greenColor};
  }
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1001px) {
    font-size: 18px;
  }
`;

const Menu = styled.div`
  display: block;
  width: 10vw;
`;
function TopBar() {
  const screen = useRecoilValue(screenSize);
  return screen == 'desktop' ? (
    <Div>
      <Link to="/">
        <Logo>
          <IoBeerOutline size={50} color="white" />
          <LogoH1>Homebrewtify</LogoH1>
        </Logo>
      </Link>
      <Link to="/">
        <A>프리미엄</A>
      </Link>
      <Link to="/">
        <A>지원</A>
      </Link>
      <Link to="/">
        <A>다운로드하기</A>
      </Link>
      <Link to="/signup">
        <A>가입하기</A>
      </Link>
      <Link to="/login">
        <A>로그인하기</A>
      </Link>
    </Div>
  ) : (
    <Div>
      <Link to="/">
        <Logo>
          <IoBeerOutline size={50} color="white" />
          <LogoH1>Homebrewtify</LogoH1>
        </Logo>
      </Link>
      <Menu>
        <TiThMenu size={'100%'} color="white" />
      </Menu>
    </Div>
  );
}

export default TopBar;
