import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PlaylistBox from '../atoms/PlaylistBox';

const LikeData = [
  {
    artist: '이하이',
    music: 'ONLY',
  },
  {
    artist: '재현',
    music: 'Try Again',
  },
  {
    artist: 'NewJeans',
    music: 'Attention',
  },
  {
    artist: 'BLACKPINK',
    music: 'Pink Venom',
  },
  {
    artist: 'NewJeans',
    music: 'Cookie',
  },
];

export interface PlaylistData {
  title: string;
  description: string;
  imgSrc: Array<string>;
}

interface Props {
  data: Array<PlaylistData>;
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

const TitleP = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.color || '#b3b3b3'};
`;
const GridDiv = styled.div`
  grid-auto-rows: 1fr;
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

const LikeBox = styled.div`
  grid-column: span 2;
  background: linear-gradient(149.46deg, #450af5, #8e8ee5 99.16%);
  border-radius: 6px;
  padding: 20px;
`;
const LikeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;
const LikeTopDiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 12px;
  flex: 1;
`;
const LikeTupleDiv = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.6;
`;
const LikeBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 62px;
`;
const LikeP = styled.p<{ fs?: string; fw?: string }>`
  color: white;
  font-size: ${(props) => props.fs || '16px'};
  font-weight: ${(props) => props.fw || 700};
`;
const LikeSpan = styled.span`
  font-size: 16px;
  color: white;
  font-weight: 500;
`;
const LikeArtistSpan = styled.span`
  font-size: 16px;
  ::after {
    content: ' ';
  }
`;
const LikeMusicSpan = styled.span`
  font-size: 16px;
  opacity: 0.7;
  :not(:last-child)::after {
    content: ' • ';
  }
`;

const PlaylistSection = ({ data, color }: Props) => {
  return (
    <WrapperSection>
      <TitleDiv>
        <HDiv>
          <TitleP color={color}>플레이리스트</TitleP>
        </HDiv>
      </TitleDiv>
      <GridDiv>
        <LikeBox>
          <LikeDiv>
            <LikeTopDiv>
              <LikeTupleDiv>
                <LikeSpan>
                  {LikeData.map((value, index) => (
                    <>
                      <LikeArtistSpan>{value.artist}</LikeArtistSpan>
                      <LikeMusicSpan>{value.music}</LikeMusicSpan>
                    </>
                  ))}
                </LikeSpan>
              </LikeTupleDiv>
            </LikeTopDiv>
            <LikeBottomDiv>
              <LikeP fs="32px">좋아요 표시한 곡</LikeP>
              <LikeP fw="400">{LikeData.length} 좋아요 표시한 곡</LikeP>
            </LikeBottomDiv>
          </LikeDiv>
        </LikeBox>
        {data.map((item: PlaylistData, idx: number) => (
          <PlaylistBox item={item} key={idx} />
        ))}
      </GridDiv>
    </WrapperSection>
  );
};

export default PlaylistSection;
