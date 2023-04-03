import React from 'react';
import styled from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

interface Item {
  imgSrc: string;
  title: string;
  titleLink: string;
  artist: Array<string>;
  artistLink: string;
}

interface Props {
  item: Item;
}

const ItemDiv = styled.div`
  background-color: #181818;
  padding: 16px;
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #282828;
    > div > div {
      opacity: 1;
      bottom: 8px;
      transition: all 0.3s ease;
    }
  }
`;
const ImgDiv = styled.div`
  margin-bottom: 16px;
  position: relative;
`;
const ButtonDiv = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  z-index: 3;
  right: 8px;
  bottom: 0px;
  opacity: 0;
  transition: all 0.3s ease;
  &:hover {
    > button {
      transform: scale(1.1);
      transition: all 0.3s ease;
    }
  }
`;

const PlayButton = styled.button`
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  position: relative;
  padding: 0px;
  cursor: pointer;
`;
const BlackDiv = styled.div`
  width: 0;
  height: 0;
  border-bottom: 9.6px solid transparent;
  border-top: 9.6px solid transparent;
  border-left: 15.3px solid black;
  border-right: 15.3px solid transparent;
  position: absolute;
  top: 50%;
  left: 69.6%;
  transform: translate(-50%, -50%);
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 62px;
`;
const NameP = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 700;
  overflow: hidden; // 넘쳐난 텍스트 숨기기
  text-overflow: ellipsis; //... 말줄임 효과.
  white-space: nowrap; // 줄바꿈 없애기.
  margin-block-start: 4px;
  margin-block-end: 4px;
  padding-block-end: 4px;
`;
const SubNameDiv = styled.div`
  display: flex;
  align-items: baseline;
  color: #b3b3b3;
  font-size: 14px;
  line-height: 1.2;
`;

const SubNameP = styled.p`
  line-height: 1.2;
  height: 39px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  color: #b3b3b3;
  overflow: hidden; // 넘쳐난 텍스트 숨기기
  text-overflow: ellipsis; //... 말줄임 효과.
  word-break: break-all; // 영어는 필요.
  padding-block-start: 4px;
`;

const ArtistBox = ({ item }: Props) => {
  return (
    <ItemDiv>
      <ImgDiv>
        <Img src={item.imgSrc} />
        <ButtonDiv>
          <PlayButton>
            <PlayCircleIcon
              sx={{
                color: '#12d760',
                fontSize: '48px',
              }}
            />
            <BlackDiv />
          </PlayButton>
        </ButtonDiv>
      </ImgDiv>
      <TextDiv>
        <NameP>{item.title}</NameP>
        <SubNameDiv>
          {item.artist.map((value, index) => (
            <>
              {index > 0 ? <pre>, </pre> : null}
              <SubNameP key={index}>{value}</SubNameP>
            </>
          ))}
        </SubNameDiv>
      </TextDiv>
    </ItemDiv>
  );
};

export default ArtistBox;
