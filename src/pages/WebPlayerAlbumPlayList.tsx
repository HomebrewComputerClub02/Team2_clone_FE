import React from 'react';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistTopDiv from '../components/molecules/PlaylistTopDiv';
import { TopDivData, AlbumTrack } from '../stores/SampleData';
import { Section } from './WebPlayerTracks';

function WebPlayerAlbumPlayList() {
  return (
    <Section>
      <PlaylistTopDiv data={TopDivData} num={AlbumTrack.length} />
      <PlaylistMidDiv data={AlbumTrack} type={'album'} />
      <PlaylistBottomDiv data={AlbumTrack} />
    </Section>
  );
}

export default WebPlayerAlbumPlayList;
