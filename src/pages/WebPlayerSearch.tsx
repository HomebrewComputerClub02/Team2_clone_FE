import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainViewFooter from '../components/molecules/MainViewFooter';
import SearchAlbumSection from '../components/molecules/SearchAlbumSection';
import SearchArtistSection from '../components/molecules/SearchArtistSection';
import SearchMusicSection from '../components/molecules/SearchMusicSection';
import WebPlayerSearchTopBar from '../components/molecules/WebPlayerSearchTopBar';
import { searchAllApi, searchListApi } from '../remote.tsx/search';

interface Nav {
  to: string;
  key: number;
  bgColor: string;
}

interface Data {
  name: string;
  color: string;
  imgUrl: string;
}

interface Item {
  music_id: string;
  singers: Array<Singer>;
  title: string;
}

interface Album {
  name: string;
  id: string;
}

interface Artist {
  name: string;
  id: string;
}
interface Singer {
  id: string;
  name: string;
}

const MainView = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  grid-area: main-view;
  min-height: 0;
  overflow-y: auto; // MainGrid 전용 y축 스크롤바
  position: relative;
  width: 100%;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 15px;
    background: rgba(233, 7, 53, 0.4); // 차이 두기 위해 색깔 추가
  }
  &::-webkit-scrollbar-thumb {
    height: 10%; // 알아서 자동 설정이라 사실 무의미.
    background: #217af4;
  }
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
`;
const SearchDiv = styled.div`
  margin-bottom: 20px;
  min-width: 400px;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-gap: 24px;
  // media query는 겹치는 영역에 한하여 아래에 있는 코드 적용.
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 24px;
  }
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 24px;
  }
  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 18px;
  }
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 12px;
  }
`;

const NavLink = styled(Link)<Nav>`
  position: relative;
  border: none;
  border-radius: 8px;
  aspect-ratio: 1/1;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${(props) => props.bgColor};
`;
const ItemDiv = styled.div`
  box-sizing: border-box;
`;
const ItemImg = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  transform: rotate(25deg) translate(18%, -2%);
  object-fit: cover;
  object-position: center center;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
`;
const ItemSpan = styled.span`
  position: absolute;
  color: white;
  font-size: 24px;
  font-weight: 700;
  box-sizing: border-box;
  overflow-wrap: break-word;
  padding: 16px;
  line-height: 1.6;
  z-index: 1;
`;
const WebPlayerSearch = () => {
  const [text, setText] = useState('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const [searchData, setSearchData] = useState([]);
  const [musicData, setMusicData] = useState<Array<Item>>();
  const [albumData, setAlbumData] = useState<Array<Album>>();
  const [artistData, setArtistData] = useState<Array<Album>>();

  // 검색 텍스트
  useEffect(() => {
    console.log(text);
    searchAllApi(text).then((res) => {
      console.log(res.data);
      setMusicData(res.data.musicResult.data);
      setAlbumData(res.data.albumResult.data);
      setArtistData(res.data.singerResult.data);
    });
  }, [text]);

  useLayoutEffect(() => {
    searchListApi().then((res) => {
      setSearchData(res.data);
    });
  }, []);

  return (
    <>
      <WebPlayerSearchTopBar onChangeHandler={onChangeHandler} />
      <MainView>
        {text === '' ? (
          <>
            <H2>모두 둘러보기</H2>
            <SearchDiv>
              {searchData.map((data: Data, index) => (
                <NavLink
                  to={`../genre/${data.name}`}
                  key={index}
                  bgColor={data.color}
                >
                  <ItemDiv>
                    <ItemSpan>{data.name}</ItemSpan>
                    <ItemImg src={data.imgUrl} />
                  </ItemDiv>
                </NavLink>
              ))}
            </SearchDiv>
          </>
        ) : (
          <>
            <SearchMusicSection data={musicData as Array<Item>} dataNum={6} />
            <SearchAlbumSection data={albumData as Array<Album>} dataNum={6} />
            <SearchArtistSection
              data={artistData as Array<Artist>}
              dataNum={6}
            />
          </>
        )}

        <MainViewFooter />
      </MainView>
    </>
  );
};

export default WebPlayerSearch;
