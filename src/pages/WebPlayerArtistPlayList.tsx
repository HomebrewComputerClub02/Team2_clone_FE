import React from 'react';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistTopDiv from '../components/molecules/PlaylistTopDiv';
import { TopDivData, ArtistTrack } from '../stores/SampleData';
import { Section } from './WebPlayerTracks';

function WebPlayerArtistPlayList() {
  return (
    <Section>
      <PlaylistTopDiv data={TopDivData} num={ArtistTrack.length} />
      <PlaylistMidDiv type="artist" data={ArtistTrack} />
      <PlaylistBottomDiv data={ArtistTrack} />
    </Section>
  );
}

export default WebPlayerArtistPlayList;
