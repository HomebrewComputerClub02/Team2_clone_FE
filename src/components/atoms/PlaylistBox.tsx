import React from 'react';
import styled from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { PlaylistData } from '../molecules/PlaylistSection';
import { TbMusic } from 'react-icons/tb';
interface Props {
  item: PlaylistData;
}

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
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
  flex: 1;
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
const Img = styled.img<{ br?: string }>`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.br || '4px'};
`;
const EmptyImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
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
const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const PlaylistBox = ({ item }: Props) => {
  return (
    <ItemDiv>
      <ImgDiv>
        {item.imgSrc.length >= 4 ? (
          <ImgGrid>
            <Img br="4px 0px 0px 0px" src={item.imgSrc[0]} />
            <Img br="0px 4px 0px 0px" src={item.imgSrc[1]} />
            <Img br="0px 0px 0px 4px" src={item.imgSrc[2]} />
            <Img br="0px 0px 4px 0px" src={item.imgSrc[3]} />
          </ImgGrid>
        ) : item.imgSrc.length == 0 ? (
          <EmptyImg>
            <TbMusic size={64} color="#b3b3b3" />
          </EmptyImg>
        ) : (
          <Img src={item.imgSrc[0]} />
        )}
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
          <SubNameP>{item.description} </SubNameP>
        </SubNameDiv>
      </TextDiv>
    </ItemDiv>
  );
};

export default PlaylistBox;
