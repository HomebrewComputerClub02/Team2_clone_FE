import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import { TopDivData, Tracks } from '../stores/SampleData';
import LikeTopDiv from '../components/molecules/LikeTopDiv';
import { likeListApi } from '../remote.tsx/collection';
import LikeBottomDiv from '../components/molecules/LikeBottomDiv';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: -24px;
  margin-left: -24px;
  margin-right: -24px;
`;

interface Data {
  userName: string;
  musicList: Array<Music>;
}

interface Music {
  trackId: string;
  title: string;
  seconds: number;
  singerList: Array<Singer>;
}

interface Singer {
  singerId: string;
  singerName: string;
  imgUrl: string;
}

const WebPlayerTracks = () => {
  const [likeData, setLikeData] = useState<Data | null>();
  const [len, setLen] = useState<number>(0);
  useEffect(() => {
    console.log(likeData);
    console.log(len);
  }, [likeData]);

  useLayoutEffect(() => {
    likeListApi().then((res) => {
      setLikeData(res.data);
      setLen(res.data.musicList.length);
    });
  }, []);

  return (
    <Section>
      <LikeTopDiv num={len} />
      <PlaylistMidDiv data={Tracks} type={'liked'} />
      <LikeBottomDiv data={Tracks} />
    </Section>
  );
};

export default WebPlayerTracks;
