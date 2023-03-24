import React from 'react';
import { Link } from 'react-router-dom';
import { IoBeerOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { Logo, LogoH1 } from '../../styled';

const Column = styled.div`
  background: inherit;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin: 10px;
`;

const ColumnTitle = styled.h1`
  color: ${(props) => props.theme.text.greyColor};
  font-weight: ${(props) => props.theme.font.bold};
  font-size: 18px;
`;

const A = styled.h1`
  font-size: 20px;
  color: white;
  font-weight: ${(props) => props.theme.font.light};
  &:hover {
    color: ${(props) => props.theme.text.greenColor};
  }
`;

const Footer = styled.div`
  background: ${(props) => props.theme.background.blackColor};
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding: 10vw;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

function HomeFooter() {
  return (
    <Footer>
      <Link to="/" style={{ fontSize: '16px', marginRight: '3vw' }}>
        <Logo>
          <IoBeerOutline size={50} color="white" />
          <LogoH1
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Homebrewtify
          </LogoH1>
        </Logo>
      </Link>
      <Column>
        <ColumnTitle>회사</ColumnTitle>
        <Link to="/">
          <A>상세 정보</A>
        </Link>
        <Link to="/">
          <A>채용 정보</A>
        </Link>
      </Column>
      <Column>
        <ColumnTitle>커뮤니티</ColumnTitle>
        <Link to="/">
          <A>아티스트</A>
        </Link>
        <Link to="/">
          <A>개발자</A>
        </Link>
      </Column>
      <Column>
        <ColumnTitle>유용한 링크</ColumnTitle>
        <Link to="/">
          <A>지원</A>
        </Link>
        <Link to="/">
          <A>웹 플레이어</A>
        </Link>
      </Column>
    </Footer>
  );
}

export default HomeFooter;
