import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AlbumBox from '../atoms/AlbumBox';
import CollectionAlbumBox from '../atoms/CollectionAlbumBox';
import SearchMusicBox from '../atoms/SearchMusicBox';
import SearchAlbumBox from '../atoms/SearchAlbumBox';

interface Item {
  id: string;
  name: string;
}

interface Props {
  data: Array<Item>;
  dataNum: number;
}
const WrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
const TitleDiv = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
const HDiv = styled.div`
  line-height: normal;
  flex-grow: 1;
`;

const TitleP = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

const GridDiv = styled.div`
  grid-template-rows: 1fr;
  min-width: 185px;
  display: grid;
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

const SearchAlbumSection = ({ data, dataNum }: Props) => {
  return (
    <WrapperSection>
      <TitleDiv>
        <HDiv>
          <TitleP>앨범</TitleP>
        </HDiv>
      </TitleDiv>
      <GridDiv>
        {data &&
          data
            .filter((item: Item, idx: number) => {
              if (idx < dataNum) return item;
            })
            .map((item: Item, idx: number) => (
              <SearchAlbumBox item={item as Item} key={idx} />
            ))}
      </GridDiv>
    </WrapperSection>
  );
};

export default SearchAlbumSection;
