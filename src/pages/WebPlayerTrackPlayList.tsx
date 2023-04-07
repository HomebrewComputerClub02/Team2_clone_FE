import React from 'react';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistTopDiv from '../components/molecules/PlaylistTopDiv';
import { TopDivData, Tracks } from '../stores/SampleData';
import { Section } from './WebPlayerTracks';

function WebPlayerTrackPlayList() {
  return (
    <Section>
      <PlaylistTopDiv data={TopDivData} num={Tracks.length} />
      <PlaylistMidDiv data={Tracks} type={'tracks'} />
      <PlaylistBottomDiv data={Tracks} />
    </Section>
  );
}

export default WebPlayerTrackPlayList;
