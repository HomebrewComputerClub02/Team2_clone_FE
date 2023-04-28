import React, { useState } from 'react';
import styled from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from 'react-router-dom';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';

interface Item {
  music_id: string;
  singers: Array<Singer>;
  title: string;
}

interface Singer {
  id: string;
  name: string;
}

interface Props {
  item: Item;
}

export const ItemDiv = styled.div`
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
export const ImgDiv = styled.div`
  margin-bottom: 16px;
  position: relative;
`;
export const ButtonDiv = styled.div`
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

export const PlayButton = styled.button`
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  position: relative;
  padding: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PlayDiv = styled.div`
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
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 62px;
`;
export const NameP = styled.p`
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
export const SubNameDiv = styled.div`
  display: flex;
  align-items: baseline;
  color: #b3b3b3;
  font-size: 14px;
  line-height: 1.2;
`;

export const SubNameLink = styled(Link)`
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
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const LayerDiv = styled.div`
  width: 15px;
  height: 15px;
  background: black;
  overflow: show;
  position: relative;
`;

const SearchMusicBox = ({ item }: Props) => {
  const [isplaying, setIsplaying] = useState(false);
  const onTogglePlay = () => {
    setIsplaying((prev) => !prev);
  };
  return (
    <ItemDiv>
      <ImgDiv>
        <Img src="https://i.scdn.co/image/ab67616d00001e022e31a8a740f621473d21dc75" />
        <ButtonDiv>
          <PlayButton onClick={onTogglePlay}>
            {!isplaying ? (
              <LayerDiv>
                <AiFillPauseCircle
                  size={'30px'}
                  color={'1CD760'}
                  style={{
                    zIndex: '10',
                    position: 'absolute',
                    top: '-7px',
                    left: '-7px',
                  }}
                />
              </LayerDiv>
            ) : (
              <LayerDiv>
                <AiFillPlayCircle
                  size={'30px'}
                  color={'1CD760'}
                  style={{
                    zIndex: '10',
                    position: 'absolute',
                    top: '-7px',
                    left: '-7px',
                  }}
                />
              </LayerDiv>
            )}
          </PlayButton>
        </ButtonDiv>
      </ImgDiv>
      <TextDiv>
        <NameP>{item.title}</NameP>
        <SubNameDiv>
          <SubNameLink to="artist">
            {item.singers.length && item.singers[0].name}
          </SubNameLink>
        </SubNameDiv>
      </TextDiv>
    </ItemDiv>
  );
};

export default SearchMusicBox;
