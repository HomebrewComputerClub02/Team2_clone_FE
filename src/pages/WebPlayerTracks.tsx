import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const TopDivData = {
  imgSrc: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
};
const LikeData = [
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00004851d5d11b6ac4242aaa41c8be69',
    music: 'ONLY',
    artist: '이하이',
    album: '4 ONLY',
    update: '6일 전',
    time: '4:00',
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209',
    music: 'Attention',
    artist: 'NewJeans',
    album: "NewJeans 1st EP 'New Jeans'",
    update: '4주 전',
    time: '3:00',
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00004851580ac3ad7dfc81e509171120',
    music: 'Pink Venom',
    artist: 'BLACKPINK',
    album: 'BORN PINK',
    update: '4주 전',
    time: '3:06',
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209',
    music: 'Cookie',
    artist: 'NewJeans',
    album: "NewJeans 1st EP 'New Jeans'",
    update: '4주 전',
    time: '3:55',
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
];
const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: -24px;
  margin-left: -24px;
  margin-right: -24px;
`;
const TopDiv = styled.div`
  height: 30vh;
  max-height: 500px;
  min-height: 340px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 32px;
  position: relative;
  display: flex;
`;
const TopVioletDiv = styled.div`
  background-color: rgb(80, 56, 160);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
`;
const TopGradDiv = styled.div`
  background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
`;
const TopImgDiv = styled.div`
  width: 232px;
  height: 232px;
  min-width: 232px;
  align-self: flex-end;
  margin-inline-end: 24px;
  position: relative;
`;
const TopImg = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;
const TopTextDiv = styled.div`
  display: flex;
  flex-flow: column;
  color: white;
  position: relative;
  justify-content: flex-end;
  gap: 30px;
`;
const TopFirstText = styled.span`
  font-size: 14px;
  font-weight: 700;
  :last-child::before {
    content: '•';
    margin: 0 4px;
  }
`;
const TopSecondText = styled.span`
  font-size: 96px;
  font-weight: 900;
  margin-block-end: 20px;
`;
const TopTextBottomDiv = styled.div`
  display: flex;
`;
const TopUserLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
const MidDiv = styled.div`
  background-color: rgb(80, 56, 160);
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%);
  height: 120px;
  padding: 24px 32px;
`;
const ButtonDiv = styled.div`
  width: 68px;
  height: 68px;
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
const BottomDiv = styled.div`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0 32px;
`;
const BottomOutlineGrid = styled.div`
  display: grid;
  grid-template-columns:
    [index] 16px [title] 6fr [album] 4fr
    [date] 3fr [time] minmax(120px, 1fr);
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  grid-gap: 16px;
  color: #b3b3b3;
  height: 36px;
  align-items: center;
  padding: 0 16px;
`;
const BottomOutlineSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
const BottomFlexDiv = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;
const BottomItemDiv = styled.div.attrs({ tabIndex: -1 })`
  display: grid;
  grid-template-columns:
    [index] 16px [title] 6fr [album] 4fr
    [date] 3fr [time] minmax(120px, 1fr);
  border: 1px solid transparent;
  border-radius: 4px;
  height: 56px;
  grid-gap: 16px;
  padding: 0 16px;
  align-items: center;
  color: #b3b3b3;
  :hover {
    background-color: hsla(0, 0%, 100%, 0.1);
    .hover {
      color: white;
    }
    .play {
      opacity: 1;
    }
    .index {
      opacity: 0;
    }
  }
  :focus {
    background-color: hsla(0, 0%, 100%, 0.3);
    .hover {
      color: white;
    }
    .play {
      opacity: 1;
    }
    .index {
      opacity: 0;
    }
  }
`;
const BottomItemSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
const BottomTitleDiv = styled.div`
  display: flex;
  gap: 16px;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
`;
const BottomTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BottomLink = styled(Link)<{ color?: string; fw?: string; fs?: string }>`
  color: ${(props) => props.color || '#b3b3b3'};
  font-weight: ${(props) => props.fw || '400'};
  font-size: ${(props) => props.fs || '16px'};
  :hover {
    text-decoration: underline;
  }
`;
const BottomLikeDiv = styled.div`
  display: flex;
  gap: 30px;
`;
const BottomIndexDiv = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;
const BottomIndex = styled.span`
  font-size: 16px;
  position: absolute;
  opacity: 1;
`;
const BottomPlayButton = styled.button`
  position: absolute;
  right: 4px;
  opacity: 0;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  color: white;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 1;
  }
`;
const WebPlayerTracks = () => {
  return (
    <Section>
      <TopDiv>
        <TopVioletDiv></TopVioletDiv>
        <TopGradDiv></TopGradDiv>
        <TopImgDiv>
          <TopImg src={TopDivData.imgSrc} />
        </TopImgDiv>
        <TopTextDiv>
          <TopFirstText>플레이리스트</TopFirstText>
          <TopSecondText>좋아요 표시한 곡</TopSecondText>
          <TopTextBottomDiv>
            <TopUserLink to="/open/collection/artists">배지호</TopUserLink>
            <TopFirstText>{LikeData.length}곡</TopFirstText>
          </TopTextBottomDiv>
        </TopTextDiv>
      </TopDiv>
      <MidDiv>
        <ButtonDiv>
          <PlayButton>
            <PlayCircleIcon
              sx={{
                color: '#12d760',
                fontSize: '68px',
              }}
            />
          </PlayButton>
        </ButtonDiv>
      </MidDiv>
      <BottomDiv>
        <BottomOutlineGrid>
          <BottomOutlineSpan>#</BottomOutlineSpan>
          <BottomOutlineSpan>제목</BottomOutlineSpan>
          <BottomOutlineSpan>앨범</BottomOutlineSpan>
          <BottomOutlineSpan>추가한 날짜</BottomOutlineSpan>
          <BottomOutlineSpan style={{ justifySelf: 'end' }}>
            <AccessTimeIcon />
          </BottomOutlineSpan>
        </BottomOutlineGrid>
        <BottomFlexDiv>
          {LikeData.map((value, index) => (
            <BottomItemDiv key={index}>
              <BottomIndexDiv>
                <BottomIndex className="index">{index + 1}</BottomIndex>
                <BottomPlayButton className="play">
                  <PlayArrowIcon
                    sx={{
                      fontSize: '20px',
                    }}
                  />
                </BottomPlayButton>
              </BottomIndexDiv>
              <BottomTitleDiv>
                <Img src={value.imgSrc} />
                <BottomTextDiv>
                  <BottomLink color="white" to={value.musicLink}>
                    {value.music}
                  </BottomLink>
                  <BottomLink className="hover" fs="14px" to={value.artistLink}>
                    {value.artist}
                  </BottomLink>
                </BottomTextDiv>
              </BottomTitleDiv>
              <BottomLink className="hover" to={value.albumLink}>
                {value.album}
              </BottomLink>
              <BottomItemSpan>{value.update}</BottomItemSpan>
              <BottomLikeDiv style={{ justifySelf: 'end' }}>
                <FavoriteIcon
                  sx={{
                    color: '#1ed760',
                    fontSize: '20px',
                  }}
                />
                <BottomItemSpan>{value.time}</BottomItemSpan>
              </BottomLikeDiv>
            </BottomItemDiv>
          ))}
        </BottomFlexDiv>
      </BottomDiv>
    </Section>
  );
};

export default WebPlayerTracks;
