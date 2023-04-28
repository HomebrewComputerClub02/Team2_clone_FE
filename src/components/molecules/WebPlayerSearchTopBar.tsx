import React, { useRef } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { BASE_URL } from '../../stores/SampleData';
import { searchAllApi } from '../../remote.tsx/search';

interface Props {
  onChangeHandler: any;
}

const TopBar = styled.header`
  grid-area: top-bar;
  min-width: 0;
  background-color: #121212;
  height: 64px;
  color: white;
  padding: 16px 32px;
  display: flex;
  gap: 48px;
  align-items: center;
`;
const ArrowDiv = styled.div`
  display: flex;
  gap: 16px;
`;
const ArrowButton = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  color: white;
  padding: 0px;
  width: 32px;
  height: 32px;
`;

const ButtonDiv = styled.button`
  display: flex;
  padding: 2px;
  border: 0;
  border-radius: 23px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  margin-left: auto;
  &:hover {
    background-color: #282828;
  }
  &:focus {
    background-color: #282828;
    .flip {
      transform: scaleY(-1);
    }
  }
`;
const NameSpan = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: white;
  margin-left: 8px;
`;
const SearchDiv = styled.div`
  display: flex;
  background-color: white;
  flex: 0.4;
  border-radius: 16px;
  padding-left: 16px;
  height: 40px;
  align-items: center;
`;
const Input = styled.input`
  border: 0;
  border-radius: 16px;
  width: 100%;
  outline: 0;
  font-size: 16px;
`;
function WebPlayerSearchTopBar({ onChangeHandler }: Props) {
  const inputRef = useRef<any>();

  const onSearch = (e: any) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    console.log('search');
    searchAllApi(inputRef.current.value);
  };
  return (
    <TopBar>
      <ArrowDiv>
        <ArrowButton>
          <ArrowBackIosIcon fontSize="small" sx={{ marginLeft: '8px' }} />
        </ArrowButton>
        <ArrowButton>
          <ArrowForwardIosIcon fontSize="small" sx={{ marginLeft: '2px' }} />
        </ArrowButton>
      </ArrowDiv>
      <SearchDiv>
        <SearchIcon sx={{ color: 'black', fontSize: '32px' }} />
        <form onSubmit={onSearch}>
          <Input
            ref={inputRef}
            onChange={onChangeHandler}
            placeholder="어떤 음악을 듣고 싶으세요?"
          />
        </form>
      </SearchDiv>
      <ButtonDiv>
        <Avatar
          src="/broken-image.jpg"
          sx={{ width: '28px', height: '28px' }}
        />
        <NameSpan>배지호</NameSpan>
        <ArrowDropDownIcon
          className="flip"
          sx={{ color: 'white', fontSize: '32px' }}
        />
      </ButtonDiv>
    </TopBar>
  );
}

export default WebPlayerSearchTopBar;
