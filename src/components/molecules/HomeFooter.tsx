import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeFooterColumn,
  HomeFooterColumnTitle,
  HomeFooterContainer,
  LinkForFooter,
  Logo,
} from '../../styled';

function HomeFooter() {
  return (
    <HomeFooterContainer>
      <Link to="/" style={{ fontSize: '1.1rem', marginRight: '3vw' }}>
        <Logo>Homebrewtify</Logo>
      </Link>
      <HomeFooterColumn>
        <HomeFooterColumnTitle>회사</HomeFooterColumnTitle>
        <Link to="/">
          <LinkForFooter>상세 정보</LinkForFooter>
        </Link>
        <Link to="/">
          <LinkForFooter>채용 정보</LinkForFooter>
        </Link>
      </HomeFooterColumn>
      <HomeFooterColumn>
        <HomeFooterColumnTitle>커뮤니티</HomeFooterColumnTitle>
        <Link to="/">
          <LinkForFooter>아티스트</LinkForFooter>
        </Link>
        <Link to="/">
          <LinkForFooter>개발자</LinkForFooter>
        </Link>
      </HomeFooterColumn>
      <HomeFooterColumn>
        <HomeFooterColumnTitle>유용한 링크</HomeFooterColumnTitle>
        <Link to="/">
          <LinkForFooter>지원</LinkForFooter>
        </Link>
        <Link to="/">
          <LinkForFooter>웹 플레이어</LinkForFooter>
        </Link>
      </HomeFooterColumn>
    </HomeFooterContainer>
  );
}

export default HomeFooter;
