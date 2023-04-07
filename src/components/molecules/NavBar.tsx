import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Nav = styled.div`
  min-width: 170px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  grid-area: nav-bar;
  min-height: 0;
  position: relative;
  z-index: 4;
  padding-top: 100px; //나중에 24로 수정.
  padding-left: 24px;
  padding-right: 24px;
`;
const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const NavLi = styled.li`
  color: white;
`;
const NavLink = styled(Link)`
  display: flex;
  gap: 16px;
  align-items: center;
  color: white;
  text-decoration: none;
`;
const NavSpan = styled.span`
  font-weight: 700;
  font-size: 14px;
`;
const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
`;
const NavInnerDiv = styled.div`
  color: white;
`;
const NavButton = styled.button`
  align-items: center;
  display: flex;
  gap: 16px;
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 0px;
`;
const HrDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
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
        <NavLi>
          <NavLink to="">
            <HomeIcon />
            <NavSpan>홈</NavSpan>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="search">
            <SearchIcon />
            <NavSpan>검색하기</NavSpan>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="collection/playlists">
            <LibraryMusicIcon />
            <NavSpan>내 라이브러리</NavSpan>
          </NavLink>
        </NavLi>
      </NavUl>
      <NavDiv>
        <NavInnerDiv>
          <NavButton>
            <LibraryAddIcon />
            <NavSpan>플레이리스트 만들기</NavSpan>
          </NavButton>
        </NavInnerDiv>
        <NavInnerDiv>
          <NavLink to="collection/tracks">
            <FavoriteIcon />
            <NavSpan>좋아요 표시한 곡</NavSpan>
          </NavLink>
        </NavInnerDiv>
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
