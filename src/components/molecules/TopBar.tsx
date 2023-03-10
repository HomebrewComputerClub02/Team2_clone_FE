import React from 'react';
import { Link } from 'react-router-dom';
import { LinkForTopBar, TopBarContainer, Logo } from '../../styled';

function TopBar() {
  return (
    <TopBarContainer>
      <Link to="/">
        <Logo>Homebrewtify</Logo>
      </Link>
      <Link to="/">
        <LinkForTopBar>프리미엄</LinkForTopBar>
      </Link>
      <Link to="/">
        <LinkForTopBar>지원</LinkForTopBar>
      </Link>
      <Link to="/">
        <LinkForTopBar>다운로드하기</LinkForTopBar>
      </Link>
      <Link to="/">
        <LinkForTopBar>가입하기</LinkForTopBar>
      </Link>
      <Link to="/">
        <LinkForTopBar>로그인하기</LinkForTopBar>
      </Link>
    </TopBarContainer>
  );
}

export default TopBar;
