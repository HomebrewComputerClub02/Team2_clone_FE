import React from 'react';
import PlaylistBottomDiv, {
  FlexDiv,
  IndexDiv,
  ItemDiv,
  Index,
  PlayButton,
  TitleDiv,
  Img,
  TextDiv,
  BottomLink,
  ItemSpan,
  LikeDiv,
} from '../components/molecules/PlaylistBottomDiv';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistTopDiv from '../components/molecules/PlaylistTopDiv';
import { Tracks } from '../stores/SampleData';
import { MainView } from './WebPlayerCollection';
import { Section } from './WebPlayerTracks';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';

function WebPlayerQueue() {
  return (
    <MainView>
      <Section>
        <h1>Queue</h1>
        <h3>Now playing</h3>
        <FlexDiv>
          {Tracks.slice(0, 1).map((value, index) => (
            <ItemDiv key={index}>
              <IndexDiv>
                <Index className="index">{index + 1}</Index>
                <PlayButton className="play">
                  <PlayArrowIcon
                    sx={{
                      fontSize: '20px',
                    }}
                  />
                </PlayButton>
              </IndexDiv>
              <TitleDiv>
                <Img src={value.imgSrc} />
                <TextDiv>
                  <BottomLink color="white" to={value.musicLink}>
                    {value.music}
                  </BottomLink>
                  <BottomLink className="hover" fs="14px" to={value.artistLink}>
                    {value.artist}
                  </BottomLink>
                </TextDiv>
              </TitleDiv>
              <BottomLink className="hover" to={value.albumLink}>
                {value.album}
              </BottomLink>

              <LikeDiv style={{ justifySelf: 'end' }}>
                <FavoriteIcon
                  sx={{
                    color: '#1ed760',
                    fontSize: '20px',
                  }}
                />
                <ItemSpan>{value.time}</ItemSpan>
              </LikeDiv>
            </ItemDiv>
          ))}
          <h3>Next from:</h3>
          {Tracks.slice(1).map((value, index) => (
            <ItemDiv key={index}>
              <IndexDiv>
                <Index className="index">{index + 2}</Index>
                <PlayButton className="play">
                  <PlayArrowIcon
                    sx={{
                      fontSize: '20px',
                    }}
                  />
                </PlayButton>
              </IndexDiv>
              <TitleDiv>
                <Img src={value.imgSrc} />
                <TextDiv>
                  <BottomLink color="white" to={value.musicLink}>
                    {value.music}
                  </BottomLink>
                  <BottomLink className="hover" fs="14px" to={value.artistLink}>
                    {value.artist}
                  </BottomLink>
                </TextDiv>
              </TitleDiv>
              <BottomLink className="hover" to={value.albumLink}>
                {value.album}
              </BottomLink>

              <LikeDiv style={{ justifySelf: 'end' }}>
                <FavoriteIcon
                  sx={{
                    color: '#1ed760',
                    fontSize: '20px',
                  }}
                />
                <ItemSpan>{value.time}</ItemSpan>
              </LikeDiv>
            </ItemDiv>
          ))}
        </FlexDiv>
      </Section>
    </MainView>
  );
}

export default WebPlayerQueue;
