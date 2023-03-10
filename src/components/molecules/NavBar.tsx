import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  grid-area: nav-bar;
  min-height: 0;
  position: relative;
  z-index: 4;
  padding-top: 24px;
  padding-left: 24px;
`;
const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const NavLi = styled.li`
  color: white;
`;
const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 24px;
`;
const NavInnerDiv = styled.div`
  color: white;
`;
const HrDiv = styled.div`
  margin-top: 10px;
  vertical-align: baseline;
`;
const Hr = styled.hr`
  height: 1px;
  border: none;
  background-color: #282828;
`;
const NavBar = () => {
  return (
    <Nav>
      <NavUl>
        <NavLi>홈</NavLi>
        <NavLi>검색하기</NavLi>
        <NavLi>내 라이브러리</NavLi>
      </NavUl>
      <NavDiv>
        <NavInnerDiv>플레이리스트 만들기</NavInnerDiv>
        <NavInnerDiv>좋아요 표시한 곡</NavInnerDiv>
      </NavDiv>
      <HrDiv>
        <Hr />
      </HrDiv>
      <NavUl>
        <NavLi>내 플레이리스트 #2</NavLi>
        <NavLi>내 플레이리스트 #1</NavLi>
      </NavUl>
    </Nav>
  );
};

export default NavBar;
