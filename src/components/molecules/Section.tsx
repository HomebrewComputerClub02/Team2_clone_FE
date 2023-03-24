import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AlbumBox from '../atoms/AlbumBox';

interface Data {
  title: string;
  body: Array<Item>;
}
interface Item {
  imgSrc: string;
  title: string;
  titleLink: string;
  artist: Array<string>;
  artistLink: string;
}

interface Props {
  data: Data;
  dataNum: number;
  show: boolean;
  color: string;
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
const TitleLink = styled(Link)`
  font-size: 24px;
  color: white;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const TitleP = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.color || '#b3b3b3'};
`;
const ShowAllLink = styled(Link)`
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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

const Section = ({ data, dataNum, show, color }: Props) => {
  return (
    <WrapperSection>
      <TitleDiv>
        <HDiv>
          {show ? (
            <TitleLink to="section">{data.title}</TitleLink>
          ) : (
            <TitleP color={color}>{data.title}</TitleP>
          )}
        </HDiv>
        {show && <ShowAllLink to="section">모두 표시</ShowAllLink>}
      </TitleDiv>
      <GridDiv>
        {data.body
          .filter((item: Item, idx: number) => {
            if (idx < dataNum) return item;
          })
          .map((item: Item, idx: number) => (
            <AlbumBox item={item} key={idx} />
          ))}
      </GridDiv>
    </WrapperSection>
  );
};

export default Section;
