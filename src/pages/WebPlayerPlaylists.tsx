import React from 'react';
import styled from 'styled-components';
import PlaylistSection from '../components/molecules/PlaylistSection';

const GridData = [
  {
    title: '내 플레이리스트 #1',
    description: '만든사람: 배지호',
    imgSrc: [
      'https://i.scdn.co/image/ab67616d00001e02580ac3ad7dfc81e509171120',

      'https://i.scdn.co/image/ab67616d00001e021a8e7c237aca188a1e314af3',

      'https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209',

      'https://i.scdn.co/image/ab67616d00001e02edf5b257be1d6593e81bb45f',
    ],
  },
  {
    title: '내 플레이리스트 #2',
    description: '만든사람: 배지호',
    imgSrc: [
      'https://i.scdn.co/image/ab67616d00001e02580ac3ad7dfc81e509171120',

      'https://i.scdn.co/image/ab67616d00001e02edf5b257be1d6593e81bb45f',
    ],
  },
  {
    title: '칠아웃 히트곡',
    description: '최신 칠아웃 히트곡을 들으며 휴식을 취해보세요.',
    imgSrc: [
      'https://i.scdn.co/image/ab67706f00000002f96cf6b8c06b2e002353b769',
    ],
  },
  {
    title: 'teen beats',
    description: 'Cruel Summer on the setlist? We did it, Joe! 💖',
    imgSrc: [
      'https://i.scdn.co/image/ab67706f000000025c37b0ebd1b5d0313bc9826c',
    ],
  },
  {
    title: '내 플레이리스트 #3',
    description: '만든사람: 배지호',
    imgSrc: [
      'https://i.scdn.co/image/ab67616d00001e02d5d11b6ac4242aaa41c8be69',

      'https://i.scdn.co/image/ab67616d00001e028c4a282e84a53c1c8acf129a',

      'https://i.scdn.co/image/ab67616d00001e029016f58cc49e6473e1207093',

      'https://i.scdn.co/image/ab67616d00001e02a991995542d50a691b9ae5be',
    ],
  },
  {
    title: '내 플레이리스트 #4',
    description: '만든사람: 배지호',
    imgSrc: [
      'https://i.scdn.co/image/ab67616d00001e02d5d11b6ac4242aaa41c8be69',
    ],
  },
  {
    title: '내 플레이리스트 #5',
    description: '만든사람: 배지호',
    imgSrc: [],
  },
];

const WebPlayerPlaylists = () => {
  return <PlaylistSection data={GridData} color={'white'} />;
};

export default WebPlayerPlaylists;
