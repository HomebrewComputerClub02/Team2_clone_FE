import React from 'react';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistTopDiv from '../components/molecules/PlaylistTopDiv';
import { Track, Tracks } from '../stores/SampleData';
import { MainView } from './WebPlayerCollection';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Section } from './WebPlayerTracks';
import { FlexDiv } from '../components/molecules/PlaylistBottomDiv';
import Song, {
  ItemDiv,
  IndexDiv,
  Index,
  PlayButton,
  TitleDiv,
  Img,
  TextDiv,
  BottomLink,
  LikeDiv,
  ItemSpan,
} from '../components/molecules/Song';

interface WebPlayerQueueProps {
  data: Track[];
}
function WebPlayerQueue({ data }: WebPlayerQueueProps) {
  return (
    <MainView>
      <Section>
        <h1>Queue</h1>
        <h3>Now playing</h3>
        <FlexDiv>
          {data.slice(0, 1).map((value, index) => (
            <Song data={value} index={index} key={index} />
          ))}
          <h3>Next from:</h3>
          {data.slice(1).map((value, index) => (
            <Song data={value} index={index} key={index} />
          ))}
        </FlexDiv>
      </Section>
    </MainView>
  );
}

export default WebPlayerQueue;
